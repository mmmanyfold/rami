<script>
    export let object = {};
    export let color = null;

    let textObject;
    let content;
    let linkUrl;
    let className = "";
    let hasNewlines;

    if (object.type === "text") {
        textObject = object.text;
        linkUrl = textObject.link?.url;
        content = textObject.content.replace(/(^\n)/gi, "");
        hasNewlines = content.includes("\n");
        const annotations = object.annotations;
        const classes = Object.keys(annotations).filter(k => annotations[k] === true);
        className = classes.join(" ");
    }
</script>

{#if textObject}
    {#if hasNewlines}
        {#if linkUrl}
            <a href={linkUrl}>
                <pre class={className} style={color ? `color:${color}` : ""}>
                    {content}
                </pre>
            </a>
        {:else}
            <pre class={className} style={color ? `color:${color}` : ""}>
                {content}
            </pre>
        {/if}
    {:else}
        {#if linkUrl}
            <a href={linkUrl}>
                <span class={className} style={color ? `color:${color}` : ""}>
                    {content}
                </span>
            </a>
        {:else}
            <span class={className} style={color ? `color:${color}` : ""}>
                {content}
            </span>
        {/if}
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
