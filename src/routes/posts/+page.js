import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    let postsUrl = new URL('/items/posts', 'http://127.0.0.1:8055')
    postsUrl.searchParams.set('fields', '*.*.*')

    const res = await fetch(postsUrl);

    if(!res.ok && res.status != 403) {
        throw error(res.status, res.statusText)
    }
    
    if(res.status === 403) {
        throw error(404, "Not Found")
    }

    const posts = await res.json()
    console.log("HEJ")
    console.log(posts.data[0].categories[0].categories_id.category_title)
    return {
        posts: posts.data
    }

}