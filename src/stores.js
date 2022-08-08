import { writable } from 'svelte/store'

export const loading = writable(false)
export const error = writable(false)
export const projects = writable([])

// "https://rami-notion-api.fly.dev/api/sync"
const url = "https://stufff.s3.amazonaws.com/data.json"

export function getProjects() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url)
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
