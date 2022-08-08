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
		<p>
			<a href="/cv">CV</a>
			<br>
			<a href="mailto:ramimgeorge@gmail.com">rami.m.george(at)gmail.com</a>
		</p>
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
		<a href="/imprint"><h1>Imprint</h1></a>
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
