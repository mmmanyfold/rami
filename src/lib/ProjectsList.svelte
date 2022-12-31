<script>
	import ProjectsGrid from './ProjectsGrid.svelte';
	import RowsIcon from './icon/RowsIcon.svelte';
	import GridIcon from './icon/GridIcon.svelte';

	export let projects;

	let activeView = "list";

	const onChangeView = (view) => {
		activeView = view;
	}
</script>


<!-------------------------->


<div class="header">
	<div role="button" 
	     class={activeView === "list" ? "active" : ""} 
		 on:click={() => onChangeView("list")}>
		TEXT <span /> <RowsIcon />
	</div>
	<div role="button" 
	     class={activeView === "gallery" ? "active" : ""} 
		 on:click={() => onChangeView("gallery")}>
		<GridIcon /> <span /> GALLERY
	</div>
</div>

{#if activeView === "list"}
<ul>
	{#if projects?.length}
		{#each projects as { id, title, slug, year, tags } (id)}
		{@const [first, ...rest] = title.split(",")}
		<li>
			<div class="title">
				<sup class="middle">({id})</sup>
				<a href={"/" + slug}>
					<h1 class="title-text">
						<span>{`${first}${rest.length ? ", " : ""}`}</span>
						{#if rest.length}
							<span>{rest.join(",").substr(1)}</span>
						{/if}
					</h1>
				</a>
			</div>
			<div class="tags">
				{#each tags as tag}
				<div><a href={"/index/" + tag}>{tag}</a></div>
				{/each}
				<div><a href={"/index/" + year}>{year}</a></div>
			</div>
		</li>
		{/each}
	{:else}
		404
	{/if}
</ul>

{:else if activeView === "gallery"}
<ProjectsGrid projects={projects} />

{/if}


<!-------------------------->


<style lang="less">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: @secondary-color;
		padding-top: 1rem;
		padding-bottom: 2.5rem;

		div {
			display: flex;
			align-items: center;
			&.active {
				color: #000;
			}
			span {
				padding: 0 0.15rem;
			}
		}
	}

	ul {
		margin-top: 1.2rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0;
			margin-bottom: 2.5rem;
		}
	}

	li {
		padding: 1rem 0;
		border-bottom: 1px solid @accent-color;

		&:nth-child(1) {
			padding-top: 0.5rem;
		}

		@media screen and (min-width: @mid-break) {
			display: flex;
			justify-content: space-between;
			padding: 1.1rem 0;

			&:nth-child(1) {
				padding-top: 0;
			}
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

		span {
			white-space: pre;
		}

		.title-text {
			display: flex;
			flex-wrap: wrap;
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
