import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let aboutUrl = new URL('/items/about', 'http://127.0.0.1:8055')

    const res = await fetch(aboutUrl)
    
    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }

    const aboutPage = await res.json()

    return {
        content: aboutPage.data.content
    }
}