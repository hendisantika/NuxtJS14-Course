import {NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json({
        hello: "World!",
    });
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    })
}