<script>
    export let object = {};

    let textObject;
    let className = "";
    let hasNewlines;

    if (object.type === "text") {
        textObject = object.text;
        hasNewlines = object.text.content.includes("\n");
        const annotations = object.annotations;
        const classes = Object.keys(annotations).filter(k => annotations[k] === true);
        className = classes.join(" ");
    }
</script>

{#if textObject}
    {#if hasNewlines}
        <pre class={className}>
            {textObject.content}
        </pre>
    {:else}
        <span class={className}>
            {textObject.content}
        </span>
    {/if}
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
