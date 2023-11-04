<script>
    import Button from "$lib/Button.svelte";
    import { enhance } from "$app/forms";

    export let form;

</script>


<div class="flex flex-col justify-center items-center my-20">
    <h1 class="text-3xl text-black font-bold">Contact Form</h1>
    {#if form?.success}
        <p class="text-2xl text-primary font-semibold">{form && form?.message || ""}</p>
    {:else}
        <form class="bg-white shadow-md border mt-8 rounded px-8 pt-6 pb-8 mb-4" method="POST" use:enhance>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Fname">
                    First Name
                    </label>
                    <input 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="Fname" 
                        name="Fname" 
                        type="text" 
                        placeholder="First Name"
                    />
                    {#if form?.errors?.Fname}
                        <p class="text-red-500 text-xs italic">{form?.errors?.email[0]}</p>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Lname">
                    Last Name
                    </label>
                    <input 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="Lname" 
                        name="Lname" 
                        type="text" 
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                />
                {#if form?.errors?.email}
                    <p class="text-red-500 text-xs italic">{form?.errors?.email[0]}</p>
                {/if}
            </div>
            <div>
                <label for="comments" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="comments" name="comments" rows="4" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Leave a comment..."></textarea>
                {#if form?.errors?.comments}
                    <p class="text-red-500 text-xs italic">{form?.errors?.comments[0]}</p>
                {/if}
            </div>
            <div class="flex items-center justify-center mt-8">
                <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </Button>
            </div>
        </form>
    {/if}
</div>