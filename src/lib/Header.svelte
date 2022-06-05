<script>
	import { page } from '$app/stores';
</script>

<header>
	<a sveltekit:prefetch class="home-link no-hover" href="/">RAMI GEORGE</a>
	<div class="nav-links">
		<a sveltekit:prefetch href="/index">INDEX</a>
		<a sveltekit:prefetch href="/info">INFO</a>
	</div>
</header>

<style lang="less">
	header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.6rem;
		padding-bottom: 0;

		@media screen and (min-width: @mid-break) {
			padding: 1.25rem 1.8rem 0 1.8rem;
		}
	}

	.home-link {
		font-size: 1.75rem;
		line-height: 1.5;
	}

	.nav-links {
		display: none;
		font-size: 1.25rem;

		@media screen and (min-width: @mid-break) {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
	}

	.nav-links a {
		margin-bottom: 1px;
	}
</style>
