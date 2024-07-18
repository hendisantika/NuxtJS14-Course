"use client"

import Header from "@/components/Header";

export default function Home() {
    return (
        <div>
            <Header name={"Hendi"} age={36} isMan={true}>
                <p>A Message from Home</p>
            </Header>
      </div>
  );
}