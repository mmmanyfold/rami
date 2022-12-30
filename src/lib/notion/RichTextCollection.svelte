<script>
    export let objects = [];
    export let color = null;

	import ParagraphObject from "./ParagraphObject.svelte";
    import RichTextObject from "./RichTextObject.svelte";
</script>

{#each objects as object}
    {#if object.type === "text"}
        <RichTextObject object={object} color={color} />
    {:else if object.type === "paragraph"}
        <ParagraphObject object={object} />
    {:else if object.type === "divider"}
        <hr />
    {/if}
{/each}
