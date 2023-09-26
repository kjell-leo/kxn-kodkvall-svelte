<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<h1>Pages</h1>
<div class="list-group">
{#each data.pages as page}
<a
    class="list-group-item list-group-item-action"
    data-sveltekit-preload-data="hover" 
    href="/pages/{page.slug}">
        {page.title}
</a>
{/each}
</div>
