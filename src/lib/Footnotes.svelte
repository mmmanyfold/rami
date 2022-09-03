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
        margin: 10rem 0 2rem 0;
        display: flex;
        flex-wrap: wrap;

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