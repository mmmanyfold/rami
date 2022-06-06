<script>
	import ProjectAside from '$lib/ProjectAside.svelte';
    export let project;
    export let type;
</script>


<div class="page-content">
	<ProjectAside project={project} hideLinks={Boolean(type)} hideMeta={Boolean(type)} label={type} />

	<section class="content">
		<slot />
	</section>
</div>


<style lang="less">
	.page-content {
		@media screen and (min-width: @mid-break) {
			display: flex;
		}
	}

	.content {
		flex: 1;
		margin: 3.6rem 0;
		background-color: black;

		@media screen and (min-width: @mid-break) {
			margin-top: 1.2rem
		}
	}
</style>
