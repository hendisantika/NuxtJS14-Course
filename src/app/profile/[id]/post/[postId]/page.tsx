"use client";
import {useParams} from "next/navigation";

export default function postId() {
    const params = useParams();
    console.log("id");
    console.log(params.id);
    console.log("productId");
    console.log(params.postId);
    return <div>My id profile's posts page</div>
}