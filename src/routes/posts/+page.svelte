<script>
    /** @type {import('./$types').PageData} */
    export let data
</script>

<h1>Posts</h1>

<div class="list-group">
    {#each data.posts as post}
    <a class="list-group-item list-group-item-action" data-sveltekit-preload-data="hover" href="/posts/{post.id}">
        
        <div class="d-flex w-100 justify-content-between">
            <p class="mb-1">{post.title}</p>
            <small>{post.date_created}</small>
        </div>
        {#each post.categories as category}
            <span class="badge bg-primary me-1 mb-1">{category.categories_id.category_title}</span>
        {/each}
    </a>
    {/each}
</div>