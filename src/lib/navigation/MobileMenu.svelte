<script>
	export let isOpen;

    import { slide } from "svelte/transition";
</script>

{#if isOpen}
<div class="container" in:slide out:slide>    
    <ul>
        <li><a href="/index">INDEX</a></li>
        <li><a href="/info">INFO</a></li>
    </ul>
</div>
{/if}

<style lang="less">
    .container {
        position: fixed;
        width: 100vw;
        background-color: var(--bg-color);
        margin-top: 56.4px;
        padding: 1rem 2rem;
        border-bottom: 1px solid black;
    }
    ul {
        text-align: right;
    }
    li {
        font-size: 1.25rem;
        margin-bottom: 1.25rem;
    }
</style>
