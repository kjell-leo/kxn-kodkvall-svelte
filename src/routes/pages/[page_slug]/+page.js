import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    
    let pageUrl = new URL('/items/pages', 'http://127.0.0.1:8055')
    pageUrl.searchParams.set('fields', "*.*")
    pageUrl.searchParams.set('filter[slug][_eq]', params.page_slug)
    console.log(pageUrl)
    const res = await fetch(pageUrl)

    console.log("HEJ HEJ")
    console.log(res)
    
    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }

    const page = await res.json()

    console.log("HEJ HEJ")
    console.log(page)

    let image_src = null;
    if(page.data[0]?.hero?.id && page.data[0]?.hero?.filename_download) {
        image_src = `http://127.0.0.1:8055/assets/${page.data[0].hero.id}/${page.data[0].hero.filename_download}`
    }

    return {
        title: page.data[0].title,
        hero: image_src,
        content: page.data[0].content,
    }
}