<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<svelte:head>
	<title>INDEX</title>
	<meta name="description" content="Projects" />
</svelte:head>


<div class="page-content">
	<ul>
		<li class="row">
			<div>
				<div class="title">
					<sup class="middle">(24)</sup>
					<h1>Dog</h1>
				</div>
			</div>
			<div class="tags">
				<div><a href="#">Video</a></div>
				<div><a href="#">2021</a></div>
			</div>
		</li>

		<li class="row">
			<div>
				<div class="title">
					<sup class="middle">(24)</sup>
					<h1>Dog</h1>
				</div>
			</div>
			<div class="tags">
				<div><a href="#">Video</a></div>
				<div><a href="#">2020</a></div>
			</div>
		</li>
	</ul>
</div>


<style lang="less">
	.title {
		@media screen and (min-width: @mid-break) {
			display: flex;
			align-items: center;
		}
	}

	h1 {
		margin: 0.3rem 0 0;
		font-style: italic;
		font-size: 1.45rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0;
			margin-left: 1rem;
		}
	}

	.row {
		padding: 1rem 0;
		border-bottom: 1px solid @accent-color;

		@media screen and (min-width: @mid-break) {
			display: flex;
			justify-content: space-between;
		}
	}

	.tags {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		@media screen and (min-width: @mid-break) {
			flex-direction: row;
			align-items: center;
		}

		div {
			margin-top: 0.4rem;
			margin-left: 1.25rem;

			@media screen and (min-width: @mid-break) {
				margin-top: 0;
			}
		}
	}
</style>
