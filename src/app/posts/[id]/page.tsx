"use client"
import {useSearchParams} from "next/navigation";

export default function PostID({params}: any) {
    const searchParams = useSearchParams();
    console.log(params);

    const newParam = searchParams.get("name");
    console.log(newParam);
    return <main>Post {params.id}</main>;
}