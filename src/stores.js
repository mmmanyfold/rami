import { writable } from 'svelte/store'

export const loading = writable(false)
export const error = writable(false)
export const projects = writable([])

export function getProjects() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch("https://rami-notion-api.fly.dev/api/sync")
            const json = await response.json()
            const data = json.allProjects.sort((a, b) => a.id < b.id ? 1 : -1);
			projects.set(data)
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
}
