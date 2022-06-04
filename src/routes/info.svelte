<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	// export const prerender = true;
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="Bio and news" />
</svelte:head>


<section>
	<p>Rami George (b. 1989, USA) is an interdisciplinary artist currently based on Lenape land in what is now called Philadelphia. They have exhibited and screened broadly and remain motivated by political struggles and fractured narratives.</p>
	<a sveltekit:prefetch href="/cv">CV</a>
	<a sveltekit:prefetch href="mailto:ramimgeorge@gmail.com">rami.m.george(at)gmail.com</a>
</section>


<style>
</style>
