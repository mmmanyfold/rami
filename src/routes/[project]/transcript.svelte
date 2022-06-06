<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;

	const project = {press: "foo"}
</script>

<svelte:head>
	<title>Transcript</title>
	<meta name="description" content="" />
</svelte:head>


<ProjectView project={project} type="Transcript">
	Content
</ProjectView>


<style lang="less">
</style>
