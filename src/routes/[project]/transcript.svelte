<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	import projectsJson from '/Users/elle/local/rami/src/projects.json';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	const project = projectsJson.allProjects.find(p => p.slug === $page.params.project);
</script>

<svelte:head>
	<title>Transcript</title>
	<meta name="description" content="" />
</svelte:head>


<ProjectView project={project} view="Transcript">
	Content
</ProjectView>


<style lang="less">
</style>
