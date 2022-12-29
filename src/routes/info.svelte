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
	const cvTags = ["Publishing", "Awards & Residencies", "Press", "Programming", "Teaching & Talks", "Education"] // TODO: add Imprint

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
	import CaretRight from '../lib/icon/CaretRight.svelte';
	import CaretDown from '../lib/icon/CaretDown.svelte';

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
		<div class="hide-desktop">
			<section>
				<h1>About</h1>
				<p><RichTextCollection objects={bio} /></p>
				<hr />
				<h1>Contact</h1>
				<p><a href="mailto:ramimgeorge@gmail.com">rami.m.george (at) gmail.com</a></p>
			</section>
			<hr />
			<CVSection name="Current & Forthcoming"
					   items={info.itemsByKey["Current & Forthcoming"]} />
		</div>
		{#if cvAdditional}
			{#each ["Exhibitions & Screenings", ...cvAdditional.tags] as tag, i}
				<div role="button" class="info-menu-item" on:click={() => toggleSection(tag)}>
					{#if activeSection === tag}
						<CaretDown />
					{:else}
						<CaretRight />
					{/if}
					<h1>{tag}</h1>
				</div>
				{#if i < cvAdditional.tags.length}
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

		{:else if activeSection === "Exhibitions & Screenings"}
			{#each exhibitionsScreenings.years as year}
				<CVSection name={year} 
						   items={exhibitionsScreenings.itemsByKey[year]}
						   isNested={true} />
			{/each}
		{:else}
			<CVSection name={activeSection}
					   items={cvAdditional.itemsByKey[activeSection]} />
		{/if}
	</div>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
		font-size: 0.95rem;
		
		@media (min-width: @mid-break) {
			margin: 1.2rem 0;
		}
	}

	p {
		@media (min-width: @mid-break) {
			margin-top: 1rem;
			margin-bottom: 1.5rem;
			padding-left: 2.25rem;
		}
	}

	hr {
		margin: 1.2rem 0;
	}

	.page {
		padding: 0 1rem;

		@media (min-width: @mid-break) {
			display: flex;
			width: 100%;
			height: calc(100% - 80px);
			position: fixed;
		}
	}

	.column {
		&:content {
			padding-top: 2rem;
		}

		&:nth-child(2) {
			display: none;
		}

		.info-menu-item {
			margin-top: 1.2rem;
			display: flex;
			align-items: center;
			color: @secondary-color;
		}

		&:first-child {
			h1 {
				margin: 0;
			}
		}

		@media (min-width: @mid-break) {
			overflow: scroll;
			padding-bottom: 4rem;

			&:first-child {
				width: 48%;
				padding-right: 2.5rem;
				color: @secondary-color;

				h1 {
					margin: 0 1.5rem;
				}
			}

			&:nth-child(2) {
				display: block;
				width: 52%;
				padding-left: 2.5rem;
				padding-right: 4rem;
			}

			.info-menu-item {
				&:hover {
					color: @accent-color;
				}
			}
		}
	}
</style>
