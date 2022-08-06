<script>
    import { page } from '$app/stores';
	import projectsJson from '../projects.json';

	export let tag = null;
	export let year = null;

	let projects = projectsJson.allProjects.sort((a, b) => a.id < b.id ? 1 : -1);
	if (tag) {
		projects = projects.filter((p) => p.tags.includes(tag));
	} else if (year) {
		projects = projects.filter((p) => p.year === year);
	}
</script>


<!-------------------------->


<ul>
	{#if projects.length}
		{#each projects as { id, title, slug, year, tags } (id)}
		<li class="row">
			<div>
				<div class="title">
					<sup class="middle">({id})</sup>
					<a href={slug}>
						<h1>{title}</h1>
					</a>
				</div>
			</div>
			<div class="tags">
				{#each tags as tag}
				<div><a href={"/tag/" + tag}>{tag}</a></div>
				{/each}
				<div><a href={"/tag/" + year}>{year}</a></div>
			</div>
		</li>
		{/each}
	{:else}
		404
	{/if}
</ul>

<div class="thumbnails">
	{#each projects as { id, title, slug, tags, year, thumbnail } (id)}
	<div class="thumbnail">
		<img src={thumbnail} alt={title} />
		<div class="caption">
			<a href={slug} class="title">{title}</a>
			<div class="tags">
				{#each tags as tag, i}
					<span>
						<a href={"/tag/" + tag}>{tag}</a>,
						{""}
					</span>
				{/each}
				<a href={"/tag/" + year}>{year}</a>
			</div>
		</div>
	</div>
	{/each}
</div>


<!-------------------------->


<style lang="less">
	ul {
		margin-top: 1.2rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0.25rem;
			margin-bottom: 2.5rem;
		}
	}

	li.row {
		padding: 1rem 0;
		border-bottom: 1px solid @accent-color;

		@media screen and (min-width: @mid-break) {
			display: flex;
			justify-content: space-between;
		}

		.title {
			@media screen and (min-width: @mid-break) {
				display: flex;
				align-items: center;
			}
		}

		h1 {
			margin: 0.3rem 0 0;
			font-style: italic;
			font-size: 1.45rem;

			@media screen and (min-width: @mid-break) {
				margin-top: 0;
				margin-left: 2.4rem;
			}
		}

		.tags {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			text-transform: capitalize;

			@media screen and (min-width: @mid-break) {
				flex-direction: row;
				align-items: center;
			}

			div {
				margin-top: 0.4rem;
				margin-left: 1rem;

				@media screen and (min-width: @mid-break) {
					margin-top: 0;
				}
			}
		}
	}

	.thumbnails {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 1rem;

		.thumbnail {
			width: 100%;
			padding: 1.1rem 0;

			@media screen and (min-width: @mid-break) {
				width: 48.5%;
				margin-bottom: 1.2rem;
			}
		}

		img {
			width: auto;
			max-width: 100%;
		}

		.caption {
			margin-top: 0.5rem;

			.title {
				font-style: italic;
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}

			.tags {
				text-transform: capitalize;
				margin-top: 0.5rem;
			}
		}
	}
</style>
