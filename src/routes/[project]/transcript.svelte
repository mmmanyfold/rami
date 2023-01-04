<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import { browser } from '$app/env';
	import { loadProjects } from '../../api';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);
		const project = projects.find(p => p?.slug === params.project);

		return {
			props: { project } 
		};
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content="Transcript — {project.title}" />
</svelte:head>

{#if project}
	<ProjectView project={project} blocks={project.transcript?.blocks} view="Transcript" />
{/if}

<style lang="less">
</style>
