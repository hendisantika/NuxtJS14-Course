async function getPostById(postId: string) {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "GET",
    });

    return response.json();
}

export default async function PostID({params}: any) {
    // const searchParams = useSearchParams();
    // console.log(params);

    const {post} = await getPostById(params.id);

    // const newParam = searchParams.get("name");
    // console.log(newParam);
    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </main>
    );
}