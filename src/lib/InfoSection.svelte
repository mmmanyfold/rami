<script>
    export let name;
    export let items;
</script>

<section>
    <h1>{name}</h1>
    <ul>
    {#each items as item}
    <li>
        {#if item["url"] || item["download"]}
            <a href={item["url"] || item["download"][0]["url"]}>
                {#if item["line-1"]}
                    <span>{item["line-1"]}</span>
                    <br />
                {/if}

                {#if item["line-2"]}
                    <span>{item["line-2"]}</span>
                    <br />
                {/if}
                
                {#if item["line-3"]}
                    <span>{item["line-3"]}</span>
                    <br />
                {/if}
                
                {#if item["line-4"]}
                    <span>{item["line-4"]}</span>
                {/if}
            </a>
        {:else}
            {#if item["line-1"]}
                <span>{item["line-1"]}</span>
                <br />
            {/if}

            {#if item["line-2"]}
                <span>{item["line-2"]}</span>
                <br />
            {/if}
            
            {#if item["line-3"]}
                <span>{item["line-3"]}</span>
                <br />
            {/if}
            
            {#if item["line-4"]}
                <span>{item["line-4"]}</span>
            {/if}
        {/if}
    </li>
    {/each}
    </ul>
</section>

<style lang="less">
	h1 {
		text-transform: uppercase;
	}

	li {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
        line-height: 1.5;
        color: @secondary-color;

        span:first-child {
            color: var(--text-color);
        }
	}

    a {
        color: @secondary-color;
        &:hover {
            color: @accent-color !important;
            span:first-child {
                color: inherit;
            }
        }
    }
</style>
