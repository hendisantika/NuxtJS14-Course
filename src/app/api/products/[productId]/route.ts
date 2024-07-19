import {NextResponse} from "next/server";
import data from '@/products.json'

export async function GET(request: Request, context: any) {
    const {params} = context;
    const product = data.filter((x) => params.productId === x.id.toString());

    return NextResponse.json({
        product,
    });
}