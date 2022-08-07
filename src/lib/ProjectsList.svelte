<script>
	import ThumbnailGrid from './ThumbnailGrid.svelte';
	import { projects as data } from '../stores.js';
	
	export let tag = null;
	export let year = null;

	let projects = $data;
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
	<li>
		<div class="title">
			<sup class="middle">({id})</sup>
			<a href={"/" + slug}>
				<h1>{title}</h1>
			</a>
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

<ThumbnailGrid projects={projects} />


<!-------------------------->


<style lang="less">
	ul {
		margin-top: 1.2rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0.25rem;
			margin-bottom: 2.5rem;
		}
	}

	li {
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
</style>
