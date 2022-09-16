<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import ProjectView from '$lib/ProjectView.svelte';
	import { projects, getProjects } from '../../stores.js';
	
	let project;

	projects.subscribe(list => {
		if (!list.length) {
			getProjects();
		} else {
			project = list.find(p => p.slug === $page.params.project);
		}
	});
</script>

<svelte:head>
	<title>Project</title>
	<meta name="description" content="" />
</svelte:head>

{#if project}
	<ProjectView project={project} projects={$projects}>
		Content
	</ProjectView>
{/if}


<style lang="less">
</style>
