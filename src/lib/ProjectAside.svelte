<script>
	import { page } from '$app/stores';
	export let project;
    export let hideLinks;
    export let hideMeta;
    export let label;
</script>


<aside>
    <sup>(24)</sup>
    <h1 class="title">Dog</h1>

    {#if !hideMeta}
        <div class="meta">
            HD video, color, sound
            <br>
            5:36 min.
            <br>
            <br>
            <a href="video">Video</a>,
            <a href="2021">2021</a>

            <hr />

            <small>
                With Ariel Zetina
                <br><br>
                Music by Bastardgeist
                <br><br>
                Footage contributed by Joel Midden
            </small>
        </div>
    {/if}

    <hr />

    <div class="links">
        {#if !hideLinks}
            {#if project.transcript}
                <a href={$page.params.project + "/transcript"}>
                    Transcript
                </a>
                <br><br>
            {/if}
            
            {#if project.exhibitionGuide}
                <a href="#">
                    Exhibition Guide
                </a>
                <br><br>
            {/if}

            {#if project.press}
                <a href={$page.params.project + "/press"}>
                    Press
                </a>
            {/if}
        {/if}
        {#if label}{label}{/if}
    </div>
</aside>


<style lang="less">
	aside {
		margin: 1.7rem 0;

		@media screen and (min-width: @mid-break) {
			width: 20%;
			margin-right: 3rem;
		}
	}

	sup {
		display: block;
		margin-bottom: 0.5rem;
	}

	h1.title {
		font-size: 1.45rem;
		font-style: italic;
		margin: 0;
	}

    .meta {
        margin-top: 1.45rem;
    }

	.links {
        color: @secondary-color;
		a {
			color: @secondary-color;
			&:hover {
				color: @accent-color;
			}
		}
	}

	hr {
		width: 50%;
        margin: 1.2rem 0;
	}
</style>
