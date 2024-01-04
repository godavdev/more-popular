import { NextRequest, NextResponse } from "next/server"
import { createItem, listItems } from "../../services/item.services"
import { errorHandler } from "@/utilities/error.handler"

export const GET = async (req: NextRequest) => {
    try {
        const items: Item[] = await listItems()
        return NextResponse.json(items)
    } catch (error) {
        errorHandler(error)
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const item = await createItem(await req.json())
        return NextResponse.json(item)
    } catch (error) {
        errorHandler(error)
    }
}