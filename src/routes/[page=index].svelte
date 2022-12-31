<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadData } from '../api';
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadData(fetch, "projects.json");
		return {
			props: {
				projects: projects?.data?.rows || []
			} 
		};
	}
</script>

<script>
	export let projects = [];
</script>

<svelte:head>
	<title>INDEX</title>
	<meta name="description" content="Projects" />
</svelte:head>


<div>
	<ProjectsList projects={projects} />
</div>


<style lang="less">
</style>
