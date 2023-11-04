<script>
  import {page} from '$app/stores';

  const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Services",
        href: "/services"
    },
    {
        title: "Contacts",
        href: "/contacts"
    }
  ]

  $: routeId = $page.route.id;
</script>

<nav class="bg-[#343a40] p-[0.5em]">
    <div class="container flex items-center py-1.5">
        <h1 class="text-[1.3em] font-normal text-white m-0 p-0">Start Bootstrap</h1>
        <ul class="lg:flex text-[1em] ml-auto items-center text-gray-300 m-0 p-0 hidden">
            {#each navItems as {title, href} }
            <li>
                <a {href} class={`nav-items hover:text-red-300 mr-4 ${routeId == href ? 'text-red-300' : ''}`}>{title}</a>
            </li>
            {/each}
        </ul>

        <div>
            
        </div>
    </div>
</nav>

