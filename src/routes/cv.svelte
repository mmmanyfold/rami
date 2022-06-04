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
	<title>CV</title>
	<meta name="description" content="EXHIBITIONS & SCREENINGS, PRINT & DIGITAL PROJECTS, READINGS & TALKS, AWARDS & RESIDENCIES, PRESS & EXHIBITION CATALOGUES, ORGANIZING & PROGRAMMING, TEACHING & CLASS VISITS, EDUCATION" />
</svelte:head>

<section>
	<h1>EXHIBITIONS & SCREENINGS</h1>
</section>


<style>
</style>
