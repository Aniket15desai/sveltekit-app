<script>
  import Hero from "$lib/Hero.svelte";
  import What from "$lib/What.svelte";
  
  export let data;

  const {posts} = data;
</script>

<Hero />
<What />
  <div class="grid grid-cols-12 gap-4 container py-4">
    {#each posts as {title, image, body}}
    <div class="col-span-10 lg:col-span-4 flex flex-col border-2 pb-6 rounded-xl">
      <img src={image} alt={title} class="w-screen rounded-t-xl" />
      <h1 class="text-lg font-medium p-3">{title.slice(0,10)}</h1>
      <p class="text-medium font-normal px-3">{body.slice(0, 80)}</p>
    </div>
    {/each}
  </div>
