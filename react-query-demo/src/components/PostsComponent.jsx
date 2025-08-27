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
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
    });

    if (isLoading) return <p>Loading Posts...</p>;
    if (isError) return <p style={{ color: red }}>Error:{error.message}</p>
    
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} disabled={isFetching}>
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