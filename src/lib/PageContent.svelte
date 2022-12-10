<script>
    export let blocks;
</script>

<!-------------------------->

{#if blocks}
<div>
	{#each blocks as block}
		{#if block.type === "code"}
			{@html block.code.rich_text[0].plain_text}
		{/if}
	{/each}
</div>
{/if}

<!-------------------------->

<style lang="less">

</style>
