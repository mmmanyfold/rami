<script context="module">
	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
</script>

<script>
	import ProjectView from '$lib/ProjectView.svelte';
	import Footnotes from '../../lib/Footnotes.svelte';
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
	<a class="arrow left" href={prevUrl} aria-label="Previous">
		{"ᐸ"}
	</a>
	<a class="arrow right" href={nextUrl} aria-label="Next">
		{"ᐳ"}
	</a>
{/if}

{#if $projects}
<Footnotes projects={$projects} />
{/if}


<style lang="less">
	.arrow {
		position: fixed;
		top: 49vh;
		color: @secondary-color;
		font-size: 1rem;

		&.left {
			left: 2rem;
		}
		&.right {
			right: 2rem;
		}
	}
</style>
