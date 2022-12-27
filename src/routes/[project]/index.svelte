<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import ProjectView from '$lib/ProjectView.svelte';
	import CaretLeft from '$lib/icon/CaretLeft.svelte';
	import CaretRight from '$lib/icon/CaretRight.svelte';
	import Footnotes from '$lib/Footnotes.svelte';

	import { projects, getProjects } from '../../stores.js';
	import { afterUpdate } from "svelte";
	
	let project;
	let nextUrl = "";
	let prevUrl = "";

	const setProject = (list) => {
		const idx = list.findIndex(p => p.slug === $page.params.project);
		project = list[idx];

		const next = idx === list.length - 1 ? list[0] : list[idx + 1];
		const prev = idx === 0 ? list[list.length - 1] : list[idx - 1];
		nextUrl = next.slug;
		prevUrl = prev.slug;
	}

	afterUpdate(() => {
		if ($projects.length) {
			setProject($projects);
		}
	});

	projects.subscribe(list => {
		if (!list.length) {
			getProjects();
		} else {
			setProject(list);
		}
	});
</script>

<svelte:head>
	<title>Project</title>
	<meta name="description" content="" />
</svelte:head>

{#if project}
	<ProjectView project={project} blocks={project.blocks} />
	<a class="desktop arrow left" href={prevUrl} aria-label="Previous">
		<CaretLeft />
	</a>
	<a class="desktop arrow right" href={nextUrl} aria-label="Next">
		<CaretRight />
	</a>
	
	<div class="mobile-arrows">
		<a class="arrow left" href={prevUrl} aria-label="Previous">
			<CaretLeft />
		</a>
		<a class="arrow right" href={nextUrl} aria-label="Next">
			<CaretRight />
		</a>
	</div>
{/if}

{#if $projects}
<div class="footnotes">
	<Footnotes projects={$projects} />
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

	.footnotes {
		margin-bottom: 3rem;
	}
</style>
