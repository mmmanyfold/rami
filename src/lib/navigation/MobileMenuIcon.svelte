<script>
    export let isOpen;
    export let onToggle;
</script>

<div class="wrapper">
    <button on:click={onToggle} class={`burger ${isOpen && "active"}`}>
    </button>
</div>

<style lang="less">
    .wrapper {
        margin-top: 0.2rem;
        @media screen and (min-width: @mid-break) {
			display: none;
		}
    }

    .burger {
        display: flex;
        outline: none;
        width: 25px;
        border: 0px;
        padding: 0px;
        margin-top: 15px;
        background: transparent;
        transition: all 250ms ease-out;
        cursor: pointer;
    }

    .burger:before, .burger:after {
        content: '';
        width: 25px;
        height: 3px;
        position: absolute;
        background: #1a1a1a;
        transition: all 250ms ease-out;
        will-change: transform;
    }

    .burger:before {
        transform: translateY(-4.5px);
    }

    .burger:after {
        transform: translateY(4.5px);
    }

    // line transition

    .active.burger:before {
        transform: translateY(0) rotate(45deg);
    }

    .active.burger:after {
        transform: translateY(0) rotate(-45deg);
    }
</style>
