export const load = async () => {

    const getPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        const filterData = data.slice(0, 3);
        return filterData;
    };

    return {
        posts: getPosts(),
    };
}