<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import CVSection from '../lib/CVSection.svelte';

	let data = [
		{
			tag: "Print & Digital Projects",
			title: "Virtues Vol. 1.",
			description: "With J. Midden & Mak Hepler-Gonzalez. Icebox Project Space. Philadelphia, PA.",
			detail: "(solo)",
			url: "google.com",
		},
		{
			tag: "Print & Digital Projects",
			title: "Leaning Back (2).",
			description: "For Circling.",
		},
		{
			tag: "Readings & Talks",
			title: "Leaning Back (2).",
			description: "For Circling.",
			url: "google.com",
		},
		{
			tag: "Readings & Talks",
			title: "Leaning Back (2).",
			description: "For Circling.",
			url: "google.com",
		},
	]
	data = data.reduce((ret, d) => {
		if (ret.itemsByTag[d.tag]) {
			ret.itemsByTag[d.tag] = [...ret.itemsByTag[d.tag], d]
		} else {
			ret.itemsByTag[d.tag] = [d]
			ret.tags = [...ret.tags, d.tag];
		}
		return ret;
	}, { itemsByTag: {}, tags: [] });
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="EXHIBITIONS &amp; SCREENINGS, PRINT &amp; DIGITAL PROJECTS, READINGS &amp; TALKS, AWARDS &amp; RESIDENCIES, PRESS &amp; EXHIBITION CATALOGUES, ORGANIZING &amp; PROGRAMMING, TEACHING &amp; CLASS VISITS, EDUCATION" />
</svelte:head>


<div class="page-content">
	<section>
		<h1>Exhibitions & Screenings</h1>
		<h2>2021</h2>
		<CVSection items={[]} />
		<h2>2020</h2>
		<CVSection items={[]} />
	</section>
	<hr/>

	{#each data.tags as tag, i}
		<CVSection name={tag} items={data.itemsByTag[tag]} />
		{#if i < data.tags.length - 1}
			<hr />
		{/if}
	{/each}
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
		margin: 1.7rem 0;
	}
	h2 {
		margin-bottom: 0;
	}
	hr {
        margin: 0;
    }
</style>
