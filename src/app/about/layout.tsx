import React from "react";
import "../about.css"

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <body>
        <header>This is the about header</header>
        {children}
        </body>
        </html>
    );
}