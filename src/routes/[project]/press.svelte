<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import { browser, dev } from '$app/env';
	import { loadProjects } from '../../api';

	export const hydrate = dev;
	export const router = browser;

	export async function load({ fetch, params }) {
		const resExhibitions = await loadData(fetch, "cv-exhibitions-and-screenings.json");
		const resCvAdditional = await loadData(fetch, "cv-additional.json");
		const projects = await loadProjects(fetch);
		
		const exhibitions = resExhibitions?.data.rows || [];
		const cvAdditional = resCvAdditional?.data.rows || [];
		const pressItems = [...exhibitions, ...cvAdditional];

		const project = projects.find(p => p.slug === params.project);
		const pressIDs = [...project?.pressExhibitions, ...project?.pressAdditional];
		
		const blocks = pressIDs.map(id => pressItems.find(item => item.uuid === id));

		return {
			props: { project, blocks }
		};
	}
</script>

<script>
	export let project;
	export let blocks;
</script>

<svelte:head>
	<title>Press</title>
	<meta name="description" content="" />
</svelte:head>


{#if project}
	<ProjectView project={project} blocks={blocks} view="Press" />
{/if}


<style lang="less">
</style>
