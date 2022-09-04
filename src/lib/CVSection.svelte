<script>
    export let name;
    export let items;
    export let isNested;
    export let defaultOpen;
    export let alwaysOpen;
    
    import { slide } from "svelte/transition";

    let isOpen = alwaysOpen || defaultOpen || !name;
    const toggle = () => isOpen = !isOpen
</script>

<section>
    {#if name}
        {#if alwaysOpen}
            <h1 class={isNested && "nested"}>{name}</h1>
        {:else}
            <div role="button" on:click={toggle} aria-expanded={isOpen}>
                <h1 class={isNested && "nested"}>{name}</h1>
            </div>
        {/if}
    {/if}
    {#if isOpen}
    <ul class={isNested && "nested"} transition:slide={{ duration: 300 }}>
        {#each items as { title, description, detail, url }}
            <li class={isNested && "nested"}>
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
    section:first-child {
        h1 {
            margin-top: 0;
        }
    }
	h1 {
		text-transform: uppercase;
		margin: 1.8rem 0 1.7rem 0;
        &.nested {
            margin: 1.6rem 0 0 0;
        }
	}

    ul {
        padding: 0 0 1.8rem 1.5rem;
        &.nested {
            padding-top: 0.4rem;
            padding-bottom: 0;
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
