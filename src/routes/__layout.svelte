<script>
	import Header from '$lib/Header.svelte';
	import '../app.less';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="less">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;

		@media screen and (min-width: @mid-break) {
			padding: 1.2rem 1.8rem;
		}
	}
</style>
