<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<div class="mt-4">
  <img class="w-100" src="{data.hero}" alt="hero">
  {@html data.content}
  <a class="btn btn-primary" data-sveltekit-preload-data="hover" href="/posts">Read posts</a>
</div>