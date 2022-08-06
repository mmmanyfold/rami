<script>
    export let projects = [];
</script>


<!-------------------------->


<div class="grid">
	{#each projects as { id, title, slug, tags, year, thumbnail } (id)}
	<div class="item">
		<img src={thumbnail} alt={title} />
		<div class="caption">
			<a href={slug} class="title">{title}</a>
			<div class="tags">
				{#each tags as tag}
					<span>
						<a href={"/tag/" + tag}>{tag}</a>,
						{""}
					</span>
				{/each}
				<a href={"/tag/" + year}>{year}</a>
			</div>
		</div>
	</div>
	{/each}
</div>


<!-------------------------->


<style lang="less">
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;

        .item {
            width: 100%;
            padding: 1.1rem 0;

            @media screen and (min-width: @mid-break) {
                width: 48.5%;
                margin-bottom: 1.2rem;
            }
        }

        img {
            width: auto;
            max-width: 100%;
        }

        .caption {
            margin-top: 0.5rem;

            .title {
                font-style: italic;
                font-size: 1.3rem;
                margin-bottom: 1rem;
            }

            .tags {
                text-transform: capitalize;
                margin-top: 0.5rem;
            }
        }
    }
</style>
