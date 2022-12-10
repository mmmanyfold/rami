<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import { slide } from "svelte/transition";
	import InfoSection from '../lib/InfoSection.svelte';
	import CVSection from '../lib/CVSection.svelte';
	import RichTextCollection from '../lib/notion/RichTextCollection.svelte';
	import { info, getInfo,
			 exhibitionsAndScreenings, getExhibitionsAndScreenings,
		     cvAdditional, getCvAdditional } from '../stores';
	import { processItemsByKey } from '../utils';

	const infoTags = ["Bio", "Current & Forthcoming"];
	const cvTags = ["Publishing", "Awards & Residencies", "Press", "Programming", "Teaching & Talks", "Education"]

	let bio = "";
	let infoItems;
	let cvItems1;
	let cvItems2;
	
	let openCvItems1 = false;
	const toggleCvItems1 = () => openCvItems1 = !openCvItems1

	info.subscribe(list => {
		if (!list.length) {
			getInfo();
		} else {
			const processed = processItemsByKey(list, "tag");
			infoItems = { ...processed, tags: infoTags };
			bio = infoItems.itemsByKey.Bio[0]["line-1"];
		}
	});

	exhibitionsAndScreenings.subscribe(list => {
		if (!list.length) {
			getExhibitionsAndScreenings();
		} else {
			const processed = processItemsByKey(list, "year");
			const years = processed.values.sort().reverse();
			cvItems1 = { ...processed, years };
		}
	});

	cvAdditional.subscribe(list => {
		if (!list.length) {
			getCvAdditional();
		} else {
			const processed = processItemsByKey(list, "tag");
			cvItems2 = { ...processed, tags: cvTags };
		}
	});
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="About / CV / News" />
</svelte:head>


<div class="page">
	<div class="column">
		<section>
			<div role="button" on:click={toggleCvItems1} aria-expanded={openCvItems1}>
				<h1>Exhibitions & Screenings</h1>
			</div>
			{#if cvItems1 && openCvItems1}
				<div class="exhibitions-screenings" transition:slide={{ duration: 300 }}>
					{#each cvItems1.years as year}
						<CVSection name={year} 
								   items={cvItems1.itemsByKey[year]}
								   defaultOpen={true}
								   isNested={true} />
					{/each}
				</div>
			{/if}
		</section>
		
		<hr/>
	
		{#if cvItems2}
			{#each cvItems2.tags as tag, i}
				<CVSection name={tag} items={cvItems2.itemsByKey[tag]} />
				{#if i < cvItems2.tags.length - 1}
					<hr />
				{/if}
			{/each}
		{/if}
	</div>
	<div class="column">
		<section>
			<h1>About</h1>
			<p><RichTextCollection objects={bio} /></p>
			<hr />
			<h1>Contact</h1>
			<p><a href="mailto:ramimgeorge@gmail.com">rami.m.george (at) gmail.com</a></p>
		</section>
	
		{#if infoItems}
		{#each infoItems.tags as tag}
			<hr />
			<InfoSection name={tag} items={infoItems.itemsByKey[tag]} />
		{/each}
		{/if}
	
		<hr/>
		<section>
			<a href="/imprint"><h1>Imprint</h1></a>
			<br />
		</section>
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
	}
</style>
