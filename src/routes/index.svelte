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
const setImageClass = (e) => {
	const img = e.path[0];
	if (img.naturalWidth > img.naturalHeight) {
		img.classList.add("landscape");
	} else {
		img.classList.add("portrait");
	}
}
const setVideoClass = (e) => {
	const video = e.path[0];
	video.setAttribute("width", "50%");
}
const getAlignmentClass = (i) => {
	const evenLength = projects.length % 2 === 0;
	if (i === 0) {
		return "items-right"
	} else if (i % 5 === 0 || i % 6 === 0) {
		return "items-center";
	} else if (evenLength) {
		return i % 2 === 0 ? "items-right" : "items-left";
	} else {
		return i % 2 === 1 ? "items-left" : "items-right";
	}
}
</script>

<svelte:head>
	<title>Rami George</title>
	<meta name="description" content="Artist Archive" />
</svelte:head>


<!-------------------------->


<ul class="home-visual">
	{#each projects as { id, title, slug, homePageAssets }, i (id)}
	{@const { type: assetType, urls } = homePageAssets}
	<li>
		<div class={"row"}>
			<a href={slug} class="no-hover">
				<sup class="middle">({id})</sup>
				{#if assetType === "Video"}
					<div class="video-container">
						<video width="100%" autoplay loop>
							<source src={urls[0]} type="video/mp4">
						</video>
					</div>
				{:else if assetType === "Image" && urls.length > 1}
					<img src={urls[0]} alt={title} loading="lazy"
						 on:load={setImageClass}
						 on:mouseenter={(e) => handleMultiImageHover(e, urls[1])}
						 on:mouseleave={(e) => handleMultiImageHover(e, urls[0])} />
				{:else if assetType === "Image" && urls.length === 1}
					<img src={urls[0]} alt={title} loading="lazy"
						 on:load={setImageClass} />
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


<!-------------------------->


<style lang="less">
li {
	margin: 2.5rem 0;
}

.items-left {
	align-items: flex-start;
}

.items-right {
	align-items: flex-end;
}

.items-center {
	align-items: center;
}

.row {
	display: flex;
	flex-direction: column;
}
.home-visual {
	sup {
		display: block;
		padding: 0 0 0.3rem 0.3rem;
		@media screen and (min-width: @mid-break) {
			padding-left: 0;
		}
	}
}

.video-container {
	width: 100%;

	@media screen and (min-with: @mid-break) {
		width: 70vw;
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
