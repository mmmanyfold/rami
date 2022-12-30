<script>
	import RichTextCollection from "./RichTextCollection.svelte";

    export let object = {};
    export let color = null;

    let textObjects;
    let className = "";

    if (object.type === "paragraph") {
        const annotations = object.paragraph?.annotations || {};
        const classes = Object.keys(annotations).filter(k => annotations[k] === true);
        className = classes.join(" ");
        textObjects = object.paragraph?.rich_text || [];
    }
</script>

{#if textObjects}
    <p class={className} style={color ? `color:${color}` : ""}>
        <RichTextCollection objects={textObjects} />
    </p>
{/if}

<style>
    .bold {
        font-weight: bold;
    }
    .italic {
        font-style: italic;
        font-weight: 500;
    }
    .strikethrough {
        text-decoration: line-through;
    }
    .underline {
        text-decoration: underline;
    }
    .code {
        font-family: monospace;
    }
</style>
