<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import { projects, getProjects, loading, error } from '../../stores.js';

	projects.subscribe(list => {
		if (!list.length) {
			getProjects();
		}
	});

	let tag = $page.params.tag;
</script>

<svelte:head>
	<title>{tag.toUpperCase()}</title>
	<meta name="description" content="{tag} work" />
</svelte:head>


<ProjectsList />
