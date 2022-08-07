<script>
	import Header from '$lib/Header.svelte';
	import '../app.less';
	import { getProjects, projects, loading, error } from '../stores.js';

	if (!$projects.length) {
		getProjects();
	}
</script>

<Header />

<main>
	{#if $loading}
		<span>Loading...</span>
	{:else if $error}
		<span>Something went wrong.</span>
	{:else}
		<slot />
	{/if}
</main>

<style lang="less">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;

		@media screen and (min-width: @mid-break) {
			padding: 0 1.8rem;
		}
	}
</style>
