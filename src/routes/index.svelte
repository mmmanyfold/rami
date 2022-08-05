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


<ul>
	{#each projects as { id, title, slug, homePageAssets }, i (id)}
		{@const { type: assetType, urls } = homePageAssets}
		{@const alignClass = i % 2 === 0 ? "right" : "left"}
		<li>
			<div class={"row " + alignClass}>
				<a class="row-item no-hover" href={slug}>
					<sup class="middle">({id})</sup>
					{#if assetType === "Video"}
						<video autoplay loop>
							<source src={urls[0]} type="video/mp4">
						</video>
					{:else if assetType === "Image" && urls.length > 1}
						<img src={urls[0]} alt={title}
							 on:mouseenter={(e) => handleMultiImageHover(e, urls[1])}
							 on:mouseleave={(e) => handleMultiImageHover(e, urls[0])} />
					{:else if assetType === "Image" && urls.length === 1}
						<img src={urls[0]} alt={title} />
					{/if}
				</a>
			</div>
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


<style lang="less">
	.row {
		display: flex;
		flex-direction: column;
		margin: 2.5rem 0;
	}

	.left {
		align-items: flex-start;
	}
	
	.right {
		align-items: flex-end;
	}

	a.row-item {
		width: 100%;

		// @media screen and (min-width: @mid-break) {

		// }

		sup {
			display: block;
			padding: 0 0 0.3rem 0.3rem;

		@media screen and (min-width: @mid-break) {
			padding-left: 0;
		}
	}
	}

	img {
		width: 100%;
	}

	.footnotes {
		display: none;
		
		@media screen and (min-width: @mid-break) {
			display: block;
			margin: 5rem 0 2rem 0;
		}

		line-height: 1.5rem;

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
