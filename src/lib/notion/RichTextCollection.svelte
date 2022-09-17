<script>
    export let objects;
    import RichTextObject from "./RichTextObject.svelte";
</script>

{#each objects as object}
    <RichTextObject object={object} />
{/each}
