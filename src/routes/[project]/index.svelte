<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>{$page.params.project.toUpperCase()}</title>
	<meta name="description" content="{$page.params.project}" />
</svelte:head>


<div class="page-content">
	<aside>
		<sup>(24)</sup>
		<h1 class="title">Dog</h1>
		HD video, color, sound
		<br>
		5:36 min.
		<br>
		<br>
		<a href="video">Video</a>,
		<a href="2021">2021</a>

		<hr />

		<small>
			With Ariel Zetina
			<br><br>
			Music by Bastardgeist
			<br><br>
			Footage contributed by Joel Midden
		</small>

		<hr />

		<div class="links">
			<a href={$page.params.project + "/transcript"}>
				Transcript
			</a>
			<br><br>
			<a href="#">
				Exhibition Guide
			</a>
			<br><br>
			<a href={$page.params.project + "/press"}>
				Press
			</a>
		</div>
	</aside>

	<section class="content">
		CONTENT
	</section>
</div>


<style lang="less">
	.page-content {
		@media screen and (min-width: @mid-break) {
			display: flex;

		}
	}

	aside {
		margin: 1.7rem 0;

		@media screen and (min-width: @mid-break) {
			width: 20%;
			margin-right: 3rem;
		}
	}

	sup {
		display: block;
		margin-bottom: 0.5rem;
	}

	h1.title {
		font-size: 1.45rem;
		font-style: italic;
		margin: 0 0 1.45rem 0;
	}

	.links {
		a {
			color: @secondary-color;
			&:hover {
				color: @accent-color;
			}
		}
	}

	hr {
		width: 50%;
	}

	.content {
		flex: 1;
		margin: 3.6rem 0;
		background-color: black;

		@media screen and (min-width: @mid-break) {
			margin-top: 1.2rem
		}
	}
</style>
