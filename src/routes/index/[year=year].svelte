<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { loadData } from '../../api';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;

	export async function load({ fetch, params }) {
		const res = await loadData(fetch, "projects.json");
		const projects = res.data?.rows || [];
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
	<title>{$page.params.year}</title>
	<meta name="description" content="{$page.params.year} work" />
</svelte:head>


<ProjectsList projects={projects} />
