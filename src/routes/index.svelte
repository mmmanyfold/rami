<script context="module">
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Rami George</title>
	<meta name="description" content="Artist Archive" />
</svelte:head>


<ul>
	<li>
		<div class="row right">
			<a class="row-item no-hover" href="untitled-mapping">
				<sup class="middle">(24)</sup>
				<img src="mapping.png" alt="Untitled (mapping)" />
			</a>
		</div>
	</li>
</ul>

<section class="footnotes">
	<a href="dog"><sup class="no-hover">(24)</sup> <span>Dog</span></a>
	<a href="untitled-the-ashram"><sup class="no-hover">(23)</sup> <span>Untitled (the ashram)</span></a>
</section>


<style lang="less">
	.row {
		display: flex;
		flex-direction: column;
		margin: 2.5rem 0;
	}

	.right {
		align-items: flex-end;
	}

	a.row-item {
		width: 100%;

		@media screen and (min-width: @mid-break) {
			width: 40%;
		}

		sup {
			display: block;
			padding: 0 0 0.3rem 0.3rem;

		@media screen and (min-width: @mid-break) {
			padding-left: 0;
		}
	}
	}

	img {
		width: 100%;
	}

	.footnotes {
		margin-top: 5rem;
		padding: 0.3rem;
		
		@media screen and (min-width: @mid-break) {
			padding: 2rem;
		}

		sup {
			font-size: 0.5rem;
		}

		span {
			font-style: italic;
		}
	}

</style>
