<script>
    export let name = null;
    export let items;
    export let isNested = false;
    
    import RichTextCollection from './notion/RichTextCollection.svelte';
</script>

<section>
    {#if name}
        <h1 class={isNested ? "nested" : ""}>{name}</h1>
    {/if}
    <ul class={isNested ? "nested" : ""}>
        {#each items as { title, description, detail, url }}
            <li class={isNested ? "nested" : ""}>
                {#if url}
                    <a href={url} target="_blank">
                        <span class="title">
                            <RichTextCollection bind:objects={title} />
                        </span>
                        {#if description}
                            <RichTextCollection bind:objects={description} />
                        {/if}
                        {#if detail}
                            <span class="detail">
                                <RichTextCollection bind:objects={detail} />
                            </span>
                        {/if}
                    </a>
                {:else}
                    <span class="title">
                        <RichTextCollection bind:objects={title} />
                    </span>
                    {#if description}
                        <span class="description">
                            <RichTextCollection bind:objects={description} />
                        </span>
                    {/if}
                    {#if detail}
                        <RichTextCollection bind:objects={detail} />
                    {/if}
                {/if}
            </li>
        {/each}
    </ul>
</section>


<style lang="less">
	h1 {
		text-transform: uppercase;
        font-size: 0.95rem;
		margin: 1.2rem 0 1.1rem 0;
        &.nested {
            margin: 1.2rem 0 0 0;
        }
	}

    ul {
        padding-top: 1.1rem;
        padding-bottom: 1rem;
        padding-left: 0.2rem;

        @media screen and (min-width: @mid-break) {
            padding-top: 0;
            padding-bottom: 1.8rem;
			padding-left: 1.1rem;
		}

        &.nested {
            padding-bottom: 0;

            @media screen and (min-width: @mid-break) {
                padding-top: 0.6rem;
            }
        }
    }

    li {
        line-height: 1.6rem;
        margin-bottom: 0.6rem;
        &.nested {
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
        }
    }

    .title {
        font-style: italic;
        color: var(--text-color);
    }

    .detail {
        color: var(--text-color);
    }

    a {
        color: @secondary-color;
        &:hover {
            color: @accent-color !important;
            .title, .detail {
                color: inherit;
            }
        }
    }

    .description {
        color: @secondary-color;
    }
</style>
