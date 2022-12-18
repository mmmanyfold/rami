<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import ProjectView from '$lib/ProjectView.svelte';
	import { projects, getProjects } from '../../stores.js';
	import { afterUpdate } from "svelte";

	let project;

	const setProject = () => {
		project = $projects.find(p => p.slug === $page.params.project);
	}

	afterUpdate(() => {
		if ($projects.length) {
			setProject();
		}
	});

	projects.subscribe(list => {
		if (!list.length) {
			getProjects();
		} else {
			setProject();
		}
	});
</script>

<svelte:head>
	<title>Transcript</title>
	<meta name="description" content="" />
</svelte:head>

{#if project}
	<ProjectView project={project} view="Transcript" />
{/if}

<style lang="less">
</style>
