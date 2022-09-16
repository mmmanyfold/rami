<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import InfoSection from '../lib/InfoSection.svelte';
	import { info, getInfo } from '../stores.js';
	import { processItemsByKey } from '../utils';

	const tags = ["current & forthcoming", "news", "archive"];
	let items;
	let bio = "";

	info.subscribe(list => {
		if (!list.length) {
			getInfo();
		} else {
			let processed = list.map(x => {
				return { ...x, tag: x.tags[0] }
			});
			processed = processItemsByKey(processed, "tag");
			items = { ...processed, tags }
			bio = items.itemsByKey.bio[0]["line-1"];
		}
	});
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="Bio and news" />
</svelte:head>


<div class="page-content">
	<section>
		<p class="bio">{bio}</p>
		<p>
			<a href="/cv">CV</a>
			<br>
			<a href="mailto:ramimgeorge@gmail.com">rami.m.george(at)gmail.com</a>
		</p>
	</section>

	{#if items}
	{#each items.tags as tag}
		<hr />
		<InfoSection name={tag} items={items.itemsByKey[tag]} />
	{/each}
	{/if}

	<hr/>
	<section>
		<a href="/imprint"><h1>Imprint</h1></a>
		<br />
	</section>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 1.5rem;

		&.bio {
			font-size: 1.3rem;
			line-height: 1.9rem;	
		}
	}
</style>
