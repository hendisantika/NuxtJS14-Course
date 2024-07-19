import {NextRequest, NextResponse} from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
    // if(!isLoggedIn && request.url === "http://localhost:3000/profile"){
    //     return NextResponse.redirect(new URL("/", request.url));
    // }
    // return NextResponse.next()
    let headers = new Headers(request.headers);
    if (isLoggedIn) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/profile"],
}