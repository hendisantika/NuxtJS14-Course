"use client"

import {useRouter} from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
    const router = useRouter()

    console.log(router)
    return <div>
        <h1>My List of profiles</h1>
        <div>
            <ul>
                <li>Using Router</li>
                <li onClick={() => router.push("/profile/1")}>Profile 1</li>
                <li onClick={() => router.push("/profile/2")}>Profile 2</li>
                <li onClick={() => router.push("/profile/3")}>Profile 3</li>
                <li><br/><br/></li>
                <li>Using Link Component</li>
                <Link href="/profile/1">Profile 1</Link>
                <Link href="/profile/2">Profile 2</Link>
                <Link
                    prefetch={false}
                    href={{
                        pathname: "/profile/3",
                        query: {
                            userName: "Hendi Santika",
                            userId: "212",
                            person: JSON.stringify({
                                age: 18,
                            }),
                        },
                    }}>Profile 3</Link>
                <a href="https://s.id/hendisantika">Hendi Santika's Profile</a>
            </ul>
        </div>
    </div>;
}