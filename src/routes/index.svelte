<script context="module">
	import ProjectsGrid from '../lib/ProjectsGrid.svelte';
	import Footnotes from '../lib/Footnotes.svelte';
	import { loadProjects } from '../api';

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);

		const assetUrls = projects.reduce((acc, p) => {
			const assets = p.homePageAssets;
			const urls = assets.files?.map(f => f.url) || [];
			if (assets.type === "Image") {
				const images = [...acc.images, urls].flat();
				return {...acc, images}
			} else if (assets.type === "Video") {
				const videos = [...acc.videos, urls].flat();
				return {...acc, videos}
			} else {
				return acc;
			}
		}, { images: [], videos: []});

		return {
			props: { projects, assetUrls }
		};
	}
</script>

<script>
	export let projects;
	export let assetUrls;

	$: innerWidth = 0;
	$: preloadImageUrls = assetUrls.images.slice(0, 5);
	$: preloadVideoUrls = assetUrls.videos.slice(0, 5);
</script>

<!-------------------------->

<svelte:head>
	<title>Rami George</title>
	<meta name="description" content="Artist Archive" />
	{#each preloadImageUrls as image}
    	<link rel="preload" as="image" href={image} />
    {/each}
	{#each preloadVideoUrls as video}
    	<link rel="preload" as="video" href={video} />
    {/each}
</svelte:head>

<svelte:window bind:innerWidth />

<!-------------------------->

{#if !innerWidth}
<span></span>

{:else}
<ul class="gallery">
	{#if innerWidth < 770}
		<div style="padding: 0 1.25rem 0 1.25rem;">
			<ProjectsGrid projects={projects} />
		</div>
	{:else}
		{#each projects as { id, title, slug, homePageAssets } (id)}
		{@const { type: assetType, files, align, width } = homePageAssets}
		<li class={`row ${align ? align : ""} ${width ? "w-" + width : ""}`}>
			<a href={slug} class="no-hover">
				<sup class="middle">({id})</sup>
				{#if assetType === "Video"}
					<video autoplay muted loop>
						<source src={files[0].url} type="video/mp4">
					</video>
				{:else if assetType === "Image" && files.length > 1}
					<img class={`hover-image ${width ? "w-" + width : ""}`} 
						 src={files[1].url} 
						 alt="" 
						 loading="lazy" />
					<img class={width ? "w-" + width : ""} 
					     src={files[0].url}
						 alt={title} 
						 loading="lazy" />
				{:else if assetType === "Image" && files.length === 1}
					<img class={width ? "w-" + width : ""} 
					     src={files[0].url} 
						 alt={title} 
						 loading="lazy" />
				{/if}
			</a>
		</li>
		{/each}
	{/if}
</ul>
<Footnotes projects={projects} />
{/if}

<!-------------------------->

<style lang="less">
.gallery {
	display: flex;
	flex-direction: column;

	.row {
		position: relative;
		width: 50vw;
		margin: 1.5rem 0 3.5rem 0;

		sup {
			display: block;
			padding-bottom: 0.3rem;
		}

		&.w-1 {
			width: 33%;
		}
		&.w-2 {
			width: 66%;
		}
		&.w-3 {
			width: 100%;
		}

		&.left {
			align-self: flex-start;
		}
		&.center {
			align-self: center;
		}
		&.right {
			align-self: flex-end;
		}
	}

	video {
		width: 100%;
	}

	img {
		width: 100%;

		&.hover-image {
			position: absolute;
			opacity: 0;
			&:hover {
				opacity: 1;
			}
		}
	}
}
</style>
