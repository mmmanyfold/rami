<script>
	import ProjectAside from '$lib/ProjectAside.svelte';
	import PageContent from '$lib/PageContent.svelte';
    export let project;
    export let view = "Project";

	let blocks;

	switch (view) {
		case "Project":
			blocks = project.blocks || [];
			break;
		case "Transcript":
			blocks = project.transcript.blocks || [];
			break;
		case "Press":
			blocks = [];
			break;
	}
</script>

<!-------------------------->

<div class="page-content">
	<ProjectAside project={project} view={view} />

	<section class="content">
		<PageContent blocks={blocks} />
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
