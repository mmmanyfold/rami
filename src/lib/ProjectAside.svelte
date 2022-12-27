<script>
	export let project;
    export let view = "Project";

    import RichTextCollection from './notion/RichTextCollection.svelte';
	import { page } from '$app/stores';

    const isSubview = view !== "Project";
</script>

{#if project}
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
            <RichTextCollection objects={project.medium} />
            <div class="tags">
                {#each project.tags as tag}
                    <span>
                        <a href={"/index/" + tag}>{tag}</a>,
                        {""}
                    </span>
                {/each}
                <a href={"/index/" + project.year}>{project.year}</a>
            </div>

            <hr />

            <small><RichTextCollection objects={project.description} /></small>
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
                <a href={project.exhibitionGuide} target="_blank">
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
{/if}


<style lang="less">
	aside {
		margin: 1.25rem 0 6rem 0;

		@media screen and (min-width: @mid-break) {
			width: 20%;
			margin-right: 3rem;
            margin-top: 0.35rem;
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
        margin: 1.2rem 0;
	}
</style>
