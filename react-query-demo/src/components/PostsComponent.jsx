import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch('  https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error("Network resonse was not ok");
    }
    return response.json();
};

function PostsComponent() {
    // use Query hook to fetch + cache data

    const {
        data: posts,
        keepPreviousData,
        isError,
        error,
        refetchOnWindowFocus,
        isFetching,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        cacheTime: 5000,
    });

    if (keepPreviousData) return <p>Loading Posts...</p>;
    if (isError) return <p style={{ color: red }}>Error:{error.message}</p>
    
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetchOnWindowFocus()} disabled={isFetching}>
                {isFetching ? "Refreshing..." : "Refresh Post"}
            </button>

            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );

}


export default PostsComponent;