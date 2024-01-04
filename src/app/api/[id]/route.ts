import { deleteItem, findItem, updateItem } from '@/services/item.services'
import { errorHandler } from '@/utilities/error.handler'
import { NextRequest, NextResponse, } from 'next/server'

type Params = {
    params: {
        id: string
    }
}

export const GET = async (req: NextRequest, { params: { id } }: Params) => {
    try {
        const item = findItem(Number(id))
        if (!item) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 })
        }
        return NextResponse.json(item)
    } catch (error) {
        errorHandler(error)
    }
}

export const PUT = async (req: NextRequest, { params: { id } }: Params) => {
    try {
        const item = updateItem({ ...await req.json(), id: id })
        if (!item) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 })
        }
        return NextResponse.json(item)
    } catch (error) {
        errorHandler(error)
    }
}

export const DELETE = async (req: NextRequest, { params: { id } }: Params) => {
    try {
        const item = deleteItem(Number(id))
        if (!item) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 })
        }
        return NextResponse.json(item)
    } catch (error) {
        errorHandler(error)
    }
}