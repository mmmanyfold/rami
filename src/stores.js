import { writable } from 'svelte/store'

export const loading = writable(false)
export const error = writable(false)
export const projects = writable([])
export const cvAdditional = writable([])
export const exhibitionsAndScreenings = writable([])
export const info = writable([])

const baseUrl = "https://rami-notion-api.fly.dev/public/"

export function getProjects() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(baseUrl + "projects.json")
            const json = await response.json()
            const data = json.rows.sort((a, b) => a.id < b.id ? 1 : -1)
			projects.set(data)
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
}

export function getCvAdditional() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(baseUrl + "cv-additional.json")
            const json = await response.json()
			cvAdditional.set(json.rows)
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
}

export function getExhibitionsAndScreenings() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(baseUrl + "cv-exhibitions-and-screenings.json")
            const json = await response.json()
			exhibitionsAndScreenings.set(json.rows)
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
}

export function getInfo() {
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(baseUrl + "info.json")
            const json = await response.json()
            const data = json.rows.sort((a, b) => a.id < b.id ? 1 : -1)
			info.set(data)
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
}
