<script>
    import '../app.css'
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Navbar />
    <slot />
    <Footer />
</div>