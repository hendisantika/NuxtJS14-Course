"use client"
import {useParams} from "next/navigation";

export default function profileID() {
    const params = useParams();
    return <div>Profile page ID: {params.id}</div>;
}