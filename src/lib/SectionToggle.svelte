<script>
	import CaretRight from '../lib/icon/CaretRight.svelte';
	import CaretDown from '../lib/icon/CaretDown.svelte';

    export let onToggle;
    export let isActive = null;
	export let activeSection = null;
	export let label;

    const active = activeSection ? activeSection === label : isActive;
</script>


<div on:click={onToggle}
     role="button"
     class={`container ${active ? "active" : ""}`}
     aria-expanded={active}
>
    {#if active}
        <CaretDown />
    {:else}
        <CaretRight />
    {/if}
    <h1>{label}</h1>
</div>


<style lang="less">
	h1 {
		text-transform: uppercase;
        margin: 0.3rem 0.4rem;
        font-size: 0.95rem;
		
		@media (min-width: @mid-break) {
            margin: 0 1.5rem;
		}
	}

    .container {
        display: flex;
        align-items: center;
        color: @secondary-color;

        @media (min-width: @mid-break) {
            margin-top: 1.2rem;
        }

        &.active {
            color: #000;
        }

        &:hover {
            color: @secondary-color;

            @media (min-width: @mid-break) {
                color: @accent-color;
		    }
        }
    }
</style>
