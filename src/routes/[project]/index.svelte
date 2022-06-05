<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>{$page.params.project.toUpperCase()}</title>
	<meta name="description" content="{$page.params.project}" />
</svelte:head>


<div class="page-content">
	PROJECT
</div>


<style lang="less">
</style>
