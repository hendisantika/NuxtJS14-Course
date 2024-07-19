"use client"
import {useState} from "react";

// async function getPostById(userId: string) {
//     const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
//         method: "GET",
//     });
//
//     return response.json();
// }

type User = {
    id: number;
    name?: string;
    age?: number
};

export default async function PostID({params}: any) {
    // const searchParams = useSearchParams();
    // console.log(params);

    // const {user} = await getPostById(params.id);
    const [user, setUser] = useState<User | null>(null);

    // const newParam = searchParams.get("name");
    // console.log(newParam);
    const getUserById = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "GET",
            });
            if (response) {
                const data = await response.json();
                console.log(response);
                console.log(data)
            }
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     getUserById()
    // }, [])

    return (
        <main>
            {user && <h1>{user.name}</h1>}
            {user && <p>{user.age}</p>}
        </main>
    );
}