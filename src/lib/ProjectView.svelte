<script>
	import ProjectAside from '$lib/ProjectAside.svelte';
	import PageContent from '$lib/PageContent.svelte';
	import CVSection from './CVSection.svelte';
    export let project;
	export let blocks = [];
    export let view = "Project";
</script>

<!-------------------------->

<div class="page-content">
	<ProjectAside project={project} view={view} />

	<section class="content">
		{#if view === "Press"}
			<CVSection items={blocks} />
		{:else}
			<PageContent blocks={blocks} />
		{/if}
	</section>
</div>

<!-------------------------->

<style lang="less">
	.page-content {
		@media screen and (min-width: @mid-break) {
			display: flex;
		}
	}

	.content {
		flex: 1;
		margin: 3.6rem 0;

		@media screen and (min-width: @mid-break) {
			margin-top: 0;
		}
	}
</style>
