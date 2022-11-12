<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import CVSection from '../lib/CVSection.svelte';
	import { slide } from "svelte/transition";
	import { exhibitionsAndScreenings, getExhibitionsAndScreenings,
		     cvAdditional, getCvAdditional } from '../stores';
	import { processItemsByKey } from '../utils';

	let openItems1 = true;
	const toggleItems1 = () => openItems1 = !openItems1

	let items1;
	let items2;
	const tags = ["Print & Digital Projects", "Readings & Talks", "Awards & Residencies", "Press & Exhibition Catalogues", "Organizing & Programming", "Teaching & Class Visits", "Education"]

	exhibitionsAndScreenings.subscribe(list => {
		if (!list.length) {
			getExhibitionsAndScreenings();
		} else {
			const processed = processItemsByKey(list, "year");
			const years = processed.values.sort().reverse();
			items1 = { ...processed, years };
		}
	});

	cvAdditional.subscribe(list => {
		if (!list.length) {
			getCvAdditional();
		} else {
			const processed = processItemsByKey(list, "tag");
			items2 = { ...processed, tags };
		}
	});
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" 
	      content="EXHIBITIONS &amp; SCREENINGS, PRINT &amp; DIGITAL PROJECTS, READINGS &amp; TALKS, AWARDS &amp; RESIDENCIES, PRESS &amp; EXHIBITION CATALOGUES, ORGANIZING &amp; PROGRAMMING, TEACHING &amp; CLASS VISITS, EDUCATION" />
</svelte:head>


<div class="page-content">
	<section>
		<div role="button" on:click={toggleItems1} aria-expanded={openItems1}>
			<h1>Exhibitions & Screenings</h1>
		</div>
		{#if items1 && openItems1}
			<div class="exhibitions-screenings" transition:slide={{ duration: 300 }}>
				{#each items1.years as year}
					<CVSection name={year} 
							   items={items1.itemsByKey[year]} 
							   isNested={true}
							   alwaysOpen={true} />
				{/each}
			</div>
		{/if}
	</section>
	
	<hr/>

	{#if items2}
		{#each items2.tags as tag, i}
			<CVSection name={tag} items={items2.itemsByKey[tag]} />
			{#if i < items2.tags.length - 1}
				<hr />
			{/if}
		{/each}
	{/if}
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
		margin: 1.8rem 0;
	}
	hr {
        margin: 0;
    }
	.page-content {
		margin-bottom: 4em;
	}
	.exhibitions-screenings {
		padding-bottom: 2rem;
	}
</style>
