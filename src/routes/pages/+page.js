import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
    const pagesUrl = new URL('/items/pages', 'http://127.0.0.1:8055')
    pagesUrl.searchParams.set('fields','title,slug')
    
    const res = await fetch(pagesUrl) 

    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }

    const pages = await res.json()

    return {
        pages: pages.data
    }
}