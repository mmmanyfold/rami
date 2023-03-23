<script>
    export let objects = [];
    export let color = null;

    console.log(objects)

	import ParagraphObject from "./ParagraphObject.svelte";
    import RichTextObject from "./RichTextObject.svelte";
</script>

{#if objects?.length}
    {#each objects as object}
        {#if object.type === "text"}
            <RichTextObject bind:object={object} color={color} />
        {:else if object.type === "paragraph"}
            <ParagraphObject object={object} />
        {:else if object.type === "divider"}
            <hr />
        {/if}
    {/each}
{/if}
