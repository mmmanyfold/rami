<script context="module">
	import ProjectsList from '$lib/ProjectsList.svelte';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>{$page.params.year}</title>
	<meta name="description" content="{$page.params.year} work" />
</svelte:head>


<div class="page-content">
	<ProjectsList tag={$page.params.year} />
</div>


<style lang="less">
</style>
