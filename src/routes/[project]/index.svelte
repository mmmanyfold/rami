<script context="module">
	import ProjectView from '$lib/ProjectView.svelte';
	import CaretLeft from '$lib/icon/CaretLeft.svelte';
	import CaretRight from '$lib/icon/CaretRight.svelte';
	import Footnotes from '$lib/Footnotes.svelte';
	import { loadProjects } from '../../api';
	import { browser } from '$app/env';

	export const hydrate = true;
	export const router = browser;

	export async function load({ fetch, params }) {
		const projects = await loadProjects(fetch);
		const currentIndex = projects.findIndex(p => p?.slug === params.project);
		const next = currentIndex === projects.length - 1 ? projects[0] : projects[currentIndex + 1];
		const prev = currentIndex === 0 ? projects[projects.length - 1] : projects[currentIndex - 1];
		return {
			props: {
				projects,
				project: projects[currentIndex],
				nextUrl: next?.slug,
				prevUrl: prev?.slug
			} 
		};
	}
</script>

<script>
	export let projects = [];
	export let project = {};
	export let nextUrl = "";
	export let prevUrl = "";
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content="Rami George — {project.title}" />
</svelte:head>

{#if project}
	<ProjectView project={project} blocks={project.blocks} />
	<a class="desktop arrow left" href={prevUrl} aria-label="Previous">
		<CaretLeft />
	</a>
	<a class="desktop arrow right" href={nextUrl} aria-label="Next">
		<CaretRight />
	</a>
	
	<div class="mobile-arrows hide-desktop">
		<a class="arrow left" href={prevUrl} aria-label="Previous">
			<CaretLeft />
		</a>
		<a class="arrow right" href={nextUrl} aria-label="Next">
			<CaretRight />
		</a>
	</div>
{/if}

{#if projects}
<div class="footnotes">
	<Footnotes projects={projects} />
</div>
{/if}


<style lang="less">
	.arrow {
		color: @secondary-color;

		&.desktop {
			display: none;
			@media (min-width: @mid-break) {
				display: block;
				position: fixed;
				top: 49vh;
			}
		}
		&.left {
			padding-left: 2rem;
			@media (min-width: @mid-break) {
				left: 0;
			}
		}
		&.right {
			padding-right: 2rem;
			@media (min-width: @mid-break) {
				right: 0;
			}
		}
	}

	.mobile-arrows {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--bg-color);
	}
</style>
