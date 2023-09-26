import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let startpageUrl = new URL('/items/startpage', 'http://127.0.0.1:8055')
    startpageUrl.searchParams.set('fields', '*.*')

    const res = await fetch(startpageUrl)

    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }
    
    const startpage = await res.json()

    return {
        title: startpage.data.title,
        content: startpage.data.content,
        hero: `http://127.0.0.1:8055/assets/${startpage.data.hero.id}/${startpage.data.hero.filename_download}`
    }

}
