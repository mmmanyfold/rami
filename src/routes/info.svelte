<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>INFO</title>
	<meta name="description" content="Bio and news" />
</svelte:head>


<div class="page-content">
	<section>
		<p class="bio">Rami George (b. 1989, USA) is an interdisciplinary artist currently based on Lenape land in what is now called Philadelphia. They have exhibited and screened broadly and remain motivated by political struggles and fractured narratives.</p>
		<div>
			<p>
				<a sveltekit:prefetch href="/cv">CV</a>
				<br>
				<a sveltekit:prefetch href="mailto:ramimgeorge@gmail.com">rami.m.george(at)gmail.com</a>
			</p>
		</div>
	</section>

	<hr/>
	<section>
		<h1>Current & Forthcoming</h1>
	</section>

	<hr/>
	<section>
		<h1>News</h1>
	</section>

	<hr/>
	<section>
		<h1>Archive</h1>
	</section>

	<hr/>
	<section>
		<h1>Imprint</h1>
	</section>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
	}

	.bio {
		font-size: 1.3rem;
		margin-top: 2.4rem;
	}
</style>
