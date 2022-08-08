<script>
	import ThumbnailGrid from '../lib/ThumbnailGrid.svelte';
	import { projects } from '../stores.js';

	$: innerWidth = 0

	const handleMultiImageHover = (e, url) => {
		if (e.type === "mouseenter") {
			e.toElement.setAttribute("src", url);
		} else if (e.type === "mouseleave") {
			e.fromElement.setAttribute("src", url);
		}
	};
</script>

<svelte:head>
	<title>Rami George</title>
	<meta name="description" content="Artist Archive" />
</svelte:head>

<svelte:window bind:innerWidth />


<!-------------------------->


{#if !innerWidth}
<span></span>
{:else}
<div>
<ul class="gallery">
	{#if innerWidth < 770}
		<div style="padding: 0 1.25rem 0 1.25rem;">
			<ThumbnailGrid projects={$projects} />
		</div>
	{:else}
		{#each $projects as { id, title, slug, homePageAssets } (id)}
		{@const { type: assetType, files } = homePageAssets}
		<li class="row">
			<a href={slug} class="no-hover">
				<sup class="middle">({id})</sup>
				{#if assetType === "Video"}
					<video autoplay muted loop>
						<source src={files[0].url} type="video/mp4">
					</video>
				{:else if assetType === "Image" && files.length > 1}
					<img src={files[0].url} alt={title} loading="lazy"
							on:mouseenter={(e) => handleMultiImageHover(e, files[1].url)}
							on:mouseleave={(e) => handleMultiImageHover(e, files[0].url)} />
				{:else if assetType === "Image" && files.length === 1}
					<img src={files[0].url} alt={title} loading="lazy" />
				{/if}
			</a>
		</li>
		{/each}
	{/if}
</ul>

<section class="footnotes">
	{#each $projects as { id, title, slug } (id)}
		<a href={slug}>
			<sup class="no-hover">({id})</sup> <span>{title}</span>
		</a>
	{/each}
</section>
</div>
{/if}


<!-------------------------->


<style lang="less">
.gallery {
	display: flex;
	flex-direction: column;

	.row {
		margin: 1.5rem 0 3.5rem 0;

		&:nth-child(odd) {
			align-self: flex-end;
		}
		&:nth-child(even) {
			align-self: flex-start;
		}

		sup {
			display: block;
			padding-bottom: 0.3rem;
		}
	}

	video {
		width: 70vw;
		max-height: 900px;
	}

	img {
		max-width: 70vw;
		max-height: 900px;
	}
}

.footnotes {
	line-height: 1.5rem;
	margin: 20rem 0 2rem 0;

	a {
		margin-right: 0.45rem;
	}

	sup {
		font-size: 0.5rem;
	}

	span {
		font-style: italic;
	}
}
</style>
