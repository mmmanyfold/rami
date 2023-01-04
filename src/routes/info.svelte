<script context="module">
	import SectionToggle from '../lib/SectionToggle.svelte';
	import SectionDrawer from '../lib/SectionDrawer.svelte';
	import InfoSection from '../lib/InfoSection.svelte';
	import CVSection from '../lib/CVSection.svelte';
	import RichTextCollection from '../lib/notion/RichTextCollection.svelte';
	import { slide } from "svelte/transition";
	import { browser, dev } from '$app/env';
	import { loadData } from '../api';
	import { processItemsByKey } from '../utils';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const info = await loadData(fetch, "info.json");
		const exhibitionsScreenings = await loadData(fetch, "cv-exhibitions-and-screenings.json");
		const cvAdditional = await loadData(fetch, "cv-additional.json");
		const imprint = await loadData(fetch, "imprint.json");
		return {
			props: {
				info: info?.data && processInfo(info.data),
				exhibitionsScreenings: exhibitionsScreenings?.data && processExhibitionsScreenings(exhibitionsScreenings.data),
				cvAdditional: cvAdditional?.data && processCvAdditional(cvAdditional.data),
				imprint: imprint?.data?.blocks
			} 
		};
	}

	const infoTags = ["Bio", "Current & Forthcoming"];
	const cvTags = ["Publishing", "Awards & Residencies", "Press", "Programming", "Teaching & Talks", "Education", "Imprint"] // TODO: add Imprint

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
	export let info;
	export let exhibitionsScreenings;
	export let cvAdditional;
	export let imprint;

	const bio = info.itemsByKey.Bio[0]["line-1"];

	let activeSection = "Info";

	const toggleSection = (selected) => {
		if (activeSection === selected) {
			activeSection = "Info";
		} else {
			activeSection = selected;
		}
	}
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="Rami George - Bio / CV / News" />
</svelte:head>


<div class="page">
	<!-- column 1 -->
	<div class="column">
		<!-- mobile -->
		<div class="hide-desktop">
			<section class="bio">
				<h1>About</h1>
				<p><RichTextCollection objects={bio} /></p>
				<hr />
				<h1>Contact</h1>
				<p><a href="mailto:ramimgeorge@gmail.com">rami.m.george (at) gmail.com</a></p>
				<hr />
			</section>
			
			<div class="accordion">
				<SectionDrawer name="Current & Forthcoming" type="info" items={info.itemsByKey["Current & Forthcoming"]} />
				<hr />

				<section>
					<SectionToggle label="Exhibitions & Screenings"
								   isActive={activeSection === "Exhibitions & Screenings"}
								   onToggle={() => toggleSection("Exhibitions & Screenings")} />
					{#if activeSection === "Exhibitions & Screenings"}
						<div transition:slide={{ duration: 300 }}>
							{#each exhibitionsScreenings.years as year}
								<CVSection name={year} 
										   items={exhibitionsScreenings.itemsByKey[year]}
										   isNested={true} />
							{/each}
						</div>
					{/if}
				</section>
				<hr />

				{#each cvAdditional.tags as tag, i}
					<SectionDrawer name={tag} type="cv" items={cvAdditional.itemsByKey[tag]} />
					{#if i < cvAdditional.tags.length}
						<hr />
					{/if}
				{/each}
			</div>
		</div>

		<!-- desktop -->
		<div class="hide-mobile">
			{#if cvAdditional}
				{#each ["Exhibitions & Screenings", ...cvAdditional.tags] as tag, i}
					<SectionToggle label={tag}
					               isActive={activeSection === tag}
								   onToggle={() => toggleSection(tag)} />
					{#if i < cvAdditional.tags.length}
						<hr />
					{/if}
				{/each}
			{/if}
		</div>
	</div>
	
	<!-- column 2 -->
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
			<h1>Exhibitions & Screenings</h1>
			{#each exhibitionsScreenings.years as year}
				<CVSection name={year} 
						   items={exhibitionsScreenings.itemsByKey[year]}
						   isNested={true} />
			{/each}

		{:else if activeSection === "Imprint"}
			<h1>Site Credits</h1>
			<RichTextCollection objects={imprint} />

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
		margin-top: 0.7rem;
		margin-bottom: 1.5rem;

		@media (min-width: @mid-break) {
			margin-top: 1rem;
			padding-left: 2.25rem;
		}
	}

	hr {
		margin: 0.55rem 0;

		@media (min-width: @mid-break) {
			margin: 1.2rem 0;
		}
	}

	.page {
		padding-bottom: 2rem;

		@media (min-width: @mid-break) {
			display: flex;
			width: 100%;
			height: calc(100% - 80px);
			padding: 0 1.35rem;
			position: fixed;
		}
	}

	.hide-desktop {
		position: relative;

		.bio {
			position: fixed;
			background-color: var(--bg-color);
			padding: 0 1.35rem;
			hr {
				margin: 0;
			}
		}
		.accordion {
			padding: 0 1.35rem;
			padding-top: 20.1rem;
		}
	}

	.column {
		&:content {
			padding-top: 2rem;
		}

		&:nth-child(2) {
			display: none;
		}

		&:first-child {
			h1 {
				margin: 1.5rem 0 0 0;
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
		}
	}
</style>
