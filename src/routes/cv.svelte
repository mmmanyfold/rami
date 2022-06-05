<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="EXHIBITIONS & SCREENINGS, PRINT & DIGITAL PROJECTS, READINGS & TALKS, AWARDS & RESIDENCIES, PRESS & EXHIBITION CATALOGUES, ORGANIZING & PROGRAMMING, TEACHING & CLASS VISITS, EDUCATION" />
</svelte:head>


<div class="page-content">
	<section>
		<h1>Exhibitions & Screenings</h1>
		<h2>2021</h2>
		<h2>2020</h2>
	</section>
	
	<hr/>
	<section>
		<h1>Print & Digital Projects</h1>
	</section>

	<hr/>
	<section>
		<h1>Readings & Talks</h1>
	</section>

	<hr/>
	<section>
		<h1>Awards & Residencies</h1>
	</section>

	<hr/>
	<section>
		<h1>Press & Exhibition Catalogues</h1>
	</section>

	<hr/>
	<section>
		<h1>Organizing & Programming</h1>
	</section>

	<hr/>
	<section>
		<h1>Teaching & Class Visits</h1>
	</section>

	<hr/>
	<section>
		<h1>Education</h1>
	</section>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
		margin-top: 2.55rem;
	}
	h2 {
		margin-bottom: 0;
	}
</style>
