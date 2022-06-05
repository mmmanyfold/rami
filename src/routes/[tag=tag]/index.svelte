<script context="module">
	import ProjectList from '$lib/ProjectList.svelte';
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>{$page.params.tag.toUpperCase()}</title>
	<meta name="description" content="{$page.params.tag} work" />
</svelte:head>


<div class="page-content">
	<ProjectList tag={$page.params.tag} />
</div>


<style lang="less">
</style>
