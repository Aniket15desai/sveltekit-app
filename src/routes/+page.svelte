<script>
  import Hero from "./Hero.svelte";
  import What from "./What.svelte";
  
  export let data;

  const {posts} = data;
</script>

<Hero />
<What />


  <div class="grid grid-cols-12 gap-4 container py-4">
    {#each posts as {title, url, id}}
    <div class="col-span-4 flex flex-col border-2 pb-6 rounded-xl">
      <img src={url} alt={title} class="w-screen rounded-t-xl" />
      <h1 class="text-lg font-medium p-3">{id}</h1>
      <p class="text-medium font-normal px-3">{title}</p>
    </div>
    {/each}
  </div>
