export const load = async () => {

    const getPosts = async () => {
        const res = await fetch("http://localhost:5173/api/posts.json");
        const data = await res.json();
        const filterData = data.slice(0, 3);
        return filterData;
    };

    return {
        posts: getPosts(),
    };
}