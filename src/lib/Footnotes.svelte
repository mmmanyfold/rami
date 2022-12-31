<script>
    export let projects;
</script>

<section>
	{#each projects as { id, title, slug } (id)}
		<a href={slug}>
			<sup class="no-hover">({id})</sup> <span>{title}</span>
		</a>
	{/each}
</section>

<style lang="less">
    section {
        line-height: 1.5rem;
        margin: 100vh 1.25rem 2rem 1.25rem;
        display: flex;
        flex-wrap: wrap;

        @media screen and (min-width: @mid-break) {
			margin-left: 0;
            margin-right: 0;
		}

        a {
            margin-right: 0.45rem;
        }

        sup {
            font-size: 0.5rem;
        }

        span {
            font-style: italic;
        }
    }
</style>