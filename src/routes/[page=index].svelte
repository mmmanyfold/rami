<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadProjects } from '../api';
	import { browser } from '$app/env';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);
		return {
			props: { projects } 
		};
	}
</script>

<script>
	export let projects = [];
</script>

<svelte:head>
	<title>INDEX</title>
	<meta name="description" content="Rami George Archive" />
</svelte:head>


<div>
	<ProjectsList projects={projects} />
</div>


<style lang="less">
</style>
