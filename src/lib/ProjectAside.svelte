<script>
	import { page } from '$app/stores';
	export let project;
    export let view = "main";

    const isSubview = view !== "main";
</script>


<aside>
    <sup>({project.id})</sup>
    {#if isSubview}
        <a href={"/" + $page.params.project}>
            <h1 class="title">{project.title}</h1>
        </a>
    {:else}
        <h1 class="title">{project.title}</h1>
    {/if}

    {#if !isSubview}
        <div class="meta">
            <pre>{project.medium}</pre>
            <div class="tags">
                {#each project.tags as tag}
                    <span>
                        <a href={"/tag/" + tag}>{tag}</a>,
                        {""}
                    </span>
                {/each}
                <a href={"/tag/" + project.year}>{project.year}</a>
            </div>

            <hr />

            <small><pre>{project.description}</pre></small>
        </div>
    {/if}

    {#if project.transcript.uuid || project.exhibitionGuide || project.press}
    <hr />
    {/if}

    <div class="links">
        {#if isSubview}
            {view}
        {:else}
            {#if project.transcript.uuid}
                <a href={"/" + $page.params.project + "/transcript"}>
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
                <a href={"/" + $page.params.project + "/press"}>
                    Press
                </a>
            {/if}
        {/if}
    </div>
</aside>


<style lang="less">
	aside {
		margin: 1.72rem 0;

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

        .tags {
            text-transform: capitalize;
        }
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
