<script context="module">
	import ProjectList from '$lib/ProjectList.svelte';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>INDEX</title>
	<meta name="description" content="Projects" />
</svelte:head>


<div class="page-content">
	<ProjectList />
</div>


<style lang="less">
</style>
