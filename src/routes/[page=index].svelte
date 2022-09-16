<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import { projects, getProjects, loading, error } from '../stores.js';
	
	projects.subscribe(list => {
		if (!list.length) {
			getProjects();
		}
	});
</script>

<svelte:head>
	<title>INDEX</title>
	<meta name="description" content="Projects" />
</svelte:head>


<div class="page-content">
	<ProjectsList />
</div>


<style lang="less">
</style>
