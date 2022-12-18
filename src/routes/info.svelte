<script context="module">
	import { browser, dev } from '$app/env';
	import { loadData } from '../api';
	import { processItemsByKey } from '../utils';

	export const hydrate = dev;
	export const router = browser;

	export async function load({ fetch, params }) {
		const info = await loadData(fetch, "info.json");
		const exhibitionsScreenings = await loadData(fetch, "cv-exhibitions-and-screenings.json");
		const cvAdditional = await loadData(fetch, "cv-additional.json");
		return {
			props: {
				info: info?.data && processInfo(info.data),
				exhibitionsScreenings: exhibitionsScreenings?.data && processExhibitionsScreenings(exhibitionsScreenings.data),
				cvAdditional: cvAdditional?.data && processCvAdditional(cvAdditional.data)
			} 
		};
	}

	const infoTags = ["Bio", "Current & Forthcoming"];
	const cvTags = ["Publishing", "Awards & Residencies", "Press", "Programming", "Teaching & Talks", "Education"]

	function processInfo(data) {
		const sorted = data.rows.sort((a, b) => a.id < b.id ? 1 : -1);
		const processed = processItemsByKey(sorted, "tag");
		return { ...processed, tags: infoTags };
	}

	function processCvAdditional(data) {
		const processed = processItemsByKey(data.rows, "tag");
		return { ...processed, tags: cvTags };
	}

	function processExhibitionsScreenings(data) {
		const processed = processItemsByKey(data.rows, "year");
		const years = processed.values.sort().reverse();
		return { ...processed, years };
	}
</script>

<script>
	import InfoSection from '../lib/InfoSection.svelte';
	import CVSection from '../lib/CVSection.svelte';
	import RichTextCollection from '../lib/notion/RichTextCollection.svelte';

	export let info;
	export let exhibitionsScreenings;
	export let cvAdditional;

	const bio = info.itemsByKey.Bio[0]["line-1"];

	let activeSection = "Info";
	const toggleSection = (name) => {
		if (activeSection === name) {
			activeSection = "Info";
		} else {
			activeSection = name;
		}
	}
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="About / CV / News" />
</svelte:head>


<div class="page">
	<div class="column">
		<div role="button" on:click={() => toggleSection("Exhibitions & Screenings")}>
			<h1>Exhibitions & Screenings</h1>
		</div>
		
		<hr/>
	
		{#if cvAdditional}
			{#each cvAdditional.tags as tag, i}
				<CVSection name={tag} 
						   items={cvAdditional.itemsByKey[tag]}
						   onToggle={() => toggleSection(tag)} />
				{#if i < cvAdditional.tags.length - 1}
					<hr />
				{/if}
			{/each}
		{/if}
	</div>
	<div class="column content">
		{#if activeSection === "Info"}
			<section>
				<h1>About</h1>
				<p><RichTextCollection objects={bio} /></p>
				<hr />
				<h1>Contact</h1>
				<p><a href="mailto:ramimgeorge@gmail.com">rami.m.george (at) gmail.com</a></p>
			</section>
		
			{#if info}
				{#each info.tags as tag}
					<hr />
					<InfoSection name={tag} items={info.itemsByKey[tag]} />
				{/each}
			{/if}
		
			<hr/>
			<section>
				<a href="/imprint"><h1>Imprint</h1></a>
				<br />
			</section>
		{:else if activeSection === "Exhibitions & Screenings"}
			{#each exhibitionsScreenings.years as year}
				<CVSection name={year} 
						   items={exhibitionsScreenings.itemsByKey[year]}
						   isNested={true}
						   alwaysOpen={true} />
			{/each}
		{:else}
			<CVSection name={activeSection} 
					   alwaysOpen={true} 
					   items={cvAdditional.itemsByKey[activeSection]} />
		{/if}
	</div>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
		font-size: 0.95rem;
		margin: 1.2rem 0;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
		padding-left: 2.25rem;
	}

	hr {
		margin: 1.2rem 0;
	}

	.page {
		@media (min-width: @mid-break) {
			display: flex;
		}
	}

	.column {
		width: 50%;

		&:first-child {
			padding-right: 2.5rem;
		}
		&:nth-child(2) {
			padding-left: 2.5rem;
		}
		&:content {
			padding-top: 2rem;
			height: calc(100% - 56.4px);
		}
	}
</style>
