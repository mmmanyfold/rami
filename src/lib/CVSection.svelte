<script>
    export let name;
    export let items;
    
    import { slide } from "svelte/transition";

    let isOpen = !name;
    const toggle = () => isOpen = !isOpen
</script>

<section>
    {#if name}
        <div role="button" on:click={toggle} aria-expanded={isOpen}>
            <h1>{name}</h1>
        </div>
    {/if}
    {#if isOpen}
    <ul transition:slide={{ duration: 300 }}>
        {#each items as { title, description, detail, url }}
            <li>
                {#if url}
                    <a href={url} target="_blank">
                        <span class="title">{title}</span>
                        {#if description}
                            <span>{description}</span>
                        {/if}
                        {#if detail}
                            <span>{detail}</span>
                        {/if}
                    </a>
                {:else}
                    <span class="title">{title}</span>
                    {#if description}
                        <span class="description">{description}</span>
                    {/if}
                    {#if detail}
                        <span>{detail}</span>
                    {/if}
                {/if}
            </li>
        {/each}
    </ul>
    {/if}
</section>


<style lang="less">
    div[role=button] {
        cursor: pointer;
        &:hover {
            color: @accent-color;
        }
    }

	h1 {
		text-transform: uppercase;
		margin: 1.8rem 0 1.7rem 0;
	}

    ul {
        padding: 0 0 1.8rem 1.5rem;
    }

    li {
        line-height: 1.6rem;
        margin-bottom: 0.6rem;
    }

    .title {
        font-style: italic;
        color: var(--text-color);
    }

    a {
        color: @secondary-color;
        &:hover {
            color: @accent-color !important;
            .title {
                color: inherit;
            }
        }
    }

    .description {
        color: @secondary-color;
    }
</style>
