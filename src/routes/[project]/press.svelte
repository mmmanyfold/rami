<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import { browser, dev } from '$app/env';
	import { loadData, loadProjects } from '../../api';

	export const hydrate = dev;
	export const router = browser;

	export async function load({ fetch, params }) {
		const resExhibitions = await loadData(fetch, "cv-exhibitions-and-screenings.json");
		const resCvAdditional = await loadData(fetch, "cv-additional.json");
		const projects = await loadProjects(fetch);
		// console.log({resExhibitions, resCvAdditional, projects})
		
		const exhibitions = resExhibitions?.data.rows || [];
		const cvAdditional = resCvAdditional?.data.rows || [];
		const pressItems = [...exhibitions, ...cvAdditional];

		// console.log({exhibitions, cvAdditional, pressItems})

		const project = projects.find(p => p.slug === params.project);
		let blocks;

		if (project) {
			const pressExhibitions = project.pressExhibitions || [];
			const pressAdditional = project.pressAdditional || [];
			const pressIDs = [...pressExhibitions, ...pressAdditional];
			blocks = pressIDs.map(id => pressItems.find(item => item.uuid === id));
		}

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
