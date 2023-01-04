<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadProjects } from '../../api';
	import { page } from '$app/stores';
	import { browser } from '$app/env';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);
		const filtered = projects.filter(p => p.year === params.year);
		return {
			props: {
				projects: filtered
			} 
		};
	}
</script>

<script>
	export let projects = [];
</script>

<svelte:head>
	<title>INDEX - {$page.params.year}</title>
	<meta name="description" content="Rami George Archive - {$page.params.year}" />
</svelte:head>


<ProjectsList projects={projects} />
