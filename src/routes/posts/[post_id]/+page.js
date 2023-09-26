import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    let postUrl = new URL(`/items/posts/${params.post_id}`, 'http://127.0.0.1:8055')
    postUrl.searchParams.set('fields', '*.*.*')

    const res = await fetch(postUrl)
    
    
    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }

    const post = await res.json()
    
    return post.data
}