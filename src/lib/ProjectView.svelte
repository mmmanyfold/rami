<script>
	import ProjectAside from '$lib/ProjectAside.svelte';
	import ProjectContent from '$lib/ProjectContent.svelte';
	import CVSection from './CVSection.svelte';
    export let project;
	export let blocks = [];
    export let view = "Project";
</script>

<!-------------------------->

<div class="page-content">
	<ProjectAside bind:project={project} bind:view={view} />

	<section class="content">
		{#if view === "Press"}
			<CVSection bind:items={blocks} />
		{:else}
			<ProjectContent bind:blocks={blocks} />
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
