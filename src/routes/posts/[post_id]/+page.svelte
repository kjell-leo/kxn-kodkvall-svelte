<script>
    /** @type {import('./$types').PageData} */
    export let data
</script>

<h1>{data.title}</h1>
{#each data.categories as category}
    <span class="badge bg-primary me-1 mb-1 ">{category.categories_id.category_title}</span>
{/each}
<div class="mt-4">
    {@html data.content}
</div>

<style>
    :global(img) {
        width: 100%;
    }
</style>
