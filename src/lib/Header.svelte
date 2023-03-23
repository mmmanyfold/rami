<script>
	export let mobileMenuOpen;
    export let toggleMobileMenu;

	import MobileMenuIcon from '../lib/navigation/MobileMenuIcon.svelte';

	$: scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-------------------------->

<header>
	<a class="home-link" href="/">RAMI GEORGE</a>
	<div class="nav-links">
		<a href="/index">INDEX</a>
		<a href="/info">INFO</a>
	</div>
	<MobileMenuIcon isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
</header>

<style lang="less">
	header {
		width: 100vw;
		position: fixed;
		background-color: var(--bg-color);
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		height: 56.4px;
		z-index: 1;

		@media screen and (min-width: @mid-break) {
			padding: 1rem 1.8rem;
			height: 80px;
		}
	}

	.home-link {
		font-size: 1.75rem;
		line-height: 1.4;

		@media screen and (min-width: @mid-break) {
			line-height: 1.8;
		}
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
