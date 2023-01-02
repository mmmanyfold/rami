<script>
	import RichTextCollection from "./notion/RichTextCollection.svelte";
	import RichTextObject from "./notion/RichTextObject.svelte";

    export let blocks;
</script>

<!-------------------------->

{#if blocks}
<div>
	{#each blocks as block}
		{#if block.type === "code"}
			{@html block.code.rich_text[0].plain_text}

		{:else if block.type === "paragraph"}
			<p><RichTextObject object={block.paragraph.rich_text[0]} /></p>

		{:else if block.type === "image"}
			{@const caption = block.image.caption}
			<img src={block.image.file.url} style="width:100%" alt={caption ? caption[0].plain_text : ""} />

		{:else if block.type === "video"}
			{@const urlSegments = block.video.external.url.split("/")}
			{@const vimeoId = urlSegments[urlSegments.length - 1]}
			
			<div class="video-container">
				<iframe title="Project Video" src={`https://player.vimeo.com/video/${vimeoId}`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
			</div>
			{#if block.video.caption}
				<p class="video-caption">
					<RichTextCollection objects={block.video.caption} />
				</p>
			{/if}
		{:else if block.type === "embed"}
			<div class="embed-container">
				<iframe src={block.embed.url} title="Embedded content" />
			</div>
		{/if}
	{/each}
</div>
{/if}

<!-------------------------->

<style lang="less">
	.video-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
		iframe {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100%;
		}
	}
	.embed-container {
		iframe {
			width: 100%;
			height: 75vh;
		}
	}
</style>
