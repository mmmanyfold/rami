<script>
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
		{/if}
	{/each}
</div>
{/if}

<!-------------------------->

<style lang="less">

</style>
