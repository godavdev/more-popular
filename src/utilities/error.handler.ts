import { NextResponse } from "next/server"

export const errorHandler = (error: unknown) => {
    if (error instanceof Error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}