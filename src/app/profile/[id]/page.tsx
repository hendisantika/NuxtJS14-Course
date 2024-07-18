"use client"
import {useParams, useRouter} from "next/navigation";

export default function profileID() {
    const params = useParams();
    const router = useRouter();
    return (
        <div>
            <h1>Profile page ID: {params.id}</h1>
            <div onClick={() => router.push("/profile")}>Back to main page</div>
        </div>
    );
}