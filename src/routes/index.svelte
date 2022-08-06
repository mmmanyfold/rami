<script context="module">
</script>

<script>
import projectsJson from '/Users/elle/local/rami/src/projects.json';
const projects = projectsJson.allProjects.sort((a, b) => a.id < b.id ? 1 : -1);

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


<!-------------------------->


<ul class="gallery">
	{#each projects as { id, title, slug, homePageAssets }, i (id)}
	{@const { type: assetType, files } = homePageAssets}
	<li class="row">
		<a href={slug} class="no-hover">
			<sup class="middle">({id})</sup>
			{#if assetType === "Video"}
				<video autoplay loop>
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
</ul>

<section class="footnotes">
	{#each projects as { id, title, slug } (id)}
		<a href={slug}>
			<sup class="no-hover">({id})</sup> <span>{title}</span>
		</a>
	{/each}
</section>


<!-------------------------->


<style lang="less">
.gallery {
	display: flex;
	flex-direction: column;

	.row {
		margin: 2.5rem 0;
		&:nth-child(odd) {
			align-self: flex-end;
		}
		&:nth-child(even) {
			align-self: flex-start;
		}
	}

	sup {
		display: block;
		padding: 0 0 0.3rem 0.3rem;
		@media screen and (min-width: @mid-break) {
			padding-left: 0;
		}
	}

	video {
		width: 100vw;
		@media screen and (min-width: @mid-break) {
			width: 70vw;
			max-height: 900px;
		}
	}

	img {
		max-width: 100vw;
		@media screen and (min-width: @mid-break) {
			max-width: 70vw;
			max-height: 900px;
		}
	}
}

.footnotes {
	line-height: 1.5rem;
	display: none;
	
	@media screen and (min-width: @mid-break) {
		display: block;
		margin: 5rem 0 2rem 0;
	}

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
