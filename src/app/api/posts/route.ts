import {NextResponse} from "next/server";
import data from '@/posts.json';

export async function GET() {
    return NextResponse.json({
        data,
    });
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    })
}