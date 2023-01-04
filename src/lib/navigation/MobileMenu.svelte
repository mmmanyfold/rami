<script>
	export let isOpen;
    export let onToggle;

    import { slide, fade } from "svelte/transition";
</script>

{#if isOpen}
<div in:fade out:fade class="overlay" on:click={onToggle}></div>
<div in:slide out:slide class="container" on:click={onToggle}>
    <ul>
        <li><a href="/index">INDEX</a></li>
        <li><a href="/info">INFO</a></li>
    </ul>
</div>
{/if}

<style lang="less">
    .overlay {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: white;
        opacity: 0.6;
    }

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
