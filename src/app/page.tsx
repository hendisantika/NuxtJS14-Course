"use client"

import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Image src={"/hendi.jpeg"} width={200} height={500} alt="Me at Photo studio"></Image>
      </div>
  );
}