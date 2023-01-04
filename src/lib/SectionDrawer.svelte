<script>
    export let name;
    export let type;
    export let items;
    export let isNested = false;
    
    import { slide } from "svelte/transition";
    import SectionToggle from './SectionToggle.svelte';
	import InfoSection from './InfoSection.svelte';
	import CVSection from './CVSection.svelte';

    let isOpen = false;
    const toggle = () => isOpen = !isOpen
</script>

<section>
    {#if name}
        <SectionToggle label={name}
                       isActive={isOpen}
                       onToggle={toggle} />
    {/if}

    {#if isOpen}
        <div transition:slide={{ duration: 300 }}>
            {#if type === "cv"}
                <CVSection items={items} isNested={isNested} />
            {:else if type === "info"}
                <InfoSection items={items} />
            {/if}
        </div>
    {/if}
</section>


<style lang="less">
</style>
