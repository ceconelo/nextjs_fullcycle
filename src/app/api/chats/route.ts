import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma";


export async function GET(request: Request) {
    const chats = await prisma.chat.findMany()
    return NextResponse.json(chats)
}

export async function POST(request: NextRequest) {
    let body = await request.json()

    const chatCreated = await prisma.chat.create({
        data: {
            message: body.message,
        },
    })

    return NextResponse.json(chatCreated)
}
