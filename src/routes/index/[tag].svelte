<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadProjects } from '../../api';
	import { page } from '$app/stores';
	import { browser } from '$app/env';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);
		const filtered = projects.filter(p => p.tags.includes(params.tag));
		return {
			props: {
				projects: filtered
			} 
		};
	}
</script>

<script>
	export let projects = [];

	let tag = $page.params.tag;
	let displayName = tag.charAt(0).toUpperCase() + tag.slice(1);
</script>

<svelte:head>
	<title>INDEX - {displayName}</title>
	<meta name="description" content="Rami George Archive - {displayName}" />
</svelte:head>


<ProjectsList projects={projects} />
