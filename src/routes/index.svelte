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
			<a class="row-item no-hover" href="#">
				<sup>(24)</sup>
				<img src="mapping.png" alt="Untitled (mapping)" />
			</a>
		</div>
	</li>
</ul>


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
	}

	sup {
		display: block;
		margin: 0 0 0.3rem 0.3rem;

		@media screen and (min-width: @mid-break) {
			margin-left: 0;
		}
	}

	img {
		width: 100%;
	}

</style>
