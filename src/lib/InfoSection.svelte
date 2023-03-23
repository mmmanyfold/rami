<script>
    export let name;
    export let items;
    
    import RichTextCollection from "./notion/RichTextCollection.svelte";
</script>

<section>
    {#if name}
        <h1>{name}</h1>
    {/if}
    <ul>
    {#each items as item}
    <li>
        {#if item["url"] || item["download"]}
            <a href={item["url"] || item["download"][0]["url"]}>
                {#if item["line-1"]}
                    <RichTextCollection bind:objects={item["line-1"]} color="#000000" />
                    <br />
                {/if}

                {#if item["line-2"]}
                    <RichTextCollection bind:objects={item["line-2"]} />
                    <br />
                {/if}
                
                {#if item["line-3"]}
                    <RichTextCollection bind:objects={item["line-3"]} />
                    <br />
                {/if}
                
                {#if item["line-4"]}
                    <RichTextCollection bind:objects={item["line-4"]} />
                {/if}
            </a>
        {:else}
            {#if item["line-1"]}
                <RichTextCollection bind:objects={item["line-1"]} color="#000000" />
                <br />
            {/if}

            {#if item["line-2"]}
                <RichTextCollection bind:objects={item["line-2"]} />
                <br />
            {/if}
            
            {#if item["line-3"]}
                <RichTextCollection bind:objects={item["line-3"]} />
                <br />
            {/if}
            
            {#if item["line-4"]}
                <RichTextCollection bind:objects={item["line-4"]} />
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
	}

    ul {
        padding-left: 0.2rem;

        @media (min-width: @mid-break) {
            padding-left: 1.5rem;
        }
    }

	li {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
        line-height: 1.35;
        color: @secondary-color;
	}

    a {
        color: @secondary-color;
        &:hover {
            color: @accent-color !important;
        }
    }
</style>
