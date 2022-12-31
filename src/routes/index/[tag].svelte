<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadProjects } from '../../api';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
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
</script>

<svelte:head>
	<title>{tag.toUpperCase()}</title>
	<meta name="description" content="{tag} work" />
</svelte:head>


<ProjectsList projects={projects} />
