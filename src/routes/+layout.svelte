<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a 
            class="navbar-brand" 
            data-sveltekit-preload-data="hover" 
            href="/">
                My blog
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a 
                        class="nav-link dropdown-toggle"
                        data-sveltekit-preload-data="hover"  
                        href="/pages" 
                        id="navbarDropdown" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">
                            Pages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {#each data.pages as page}
                        <li>
                            <a
                                class="dropdown-item"
                                data-sveltekit-preload-data="hover" 
                                href="/pages/{page.slug}">
                                    {page.title}
                            </a>
                        </li>
                        {/each}
                    </ul>
                </li>
                <li class="nav-item">
                    <a 
                        class="nav-link" 
                        data-sveltekit-preload-data="hover"
                        href="/posts">
                            Posts
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-sveltekit-preload-data="hover" 
                        href="/about">
                            About
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main class="container">
    <slot />
</main>