<script>
	import Header from '$lib/Header.svelte';
	import '../app.less';
	import MobileMenu from '../lib/navigation/MobileMenu.svelte';

	let mobileMenuOpen = false;
    const toggleMobileMenu = () => {
        if (mobileMenuOpen) {
            mobileMenuOpen = false;
        } else {
            mobileMenuOpen = true;
        }
    }
</script>

<Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
<MobileMenu isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />

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
		box-sizing: border-box;
		padding-top: 3.5rem;

		@media screen and (min-width: @mid-break) {
			padding: 5.4rem 1.8rem 0 1.8rem;
		}
	}
</style>
