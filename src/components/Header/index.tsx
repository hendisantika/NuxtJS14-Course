"use client"

import Menu from "@/components/Header/Menu";

export default function Header(props: any) {
    return (
        <header>
            <Menu {...props} />
            {props.children}
        </header>
    )
}