import { prisma } from '@/libraries/prisma'

export const createItem = async (item: Omit<Item, 'id'>) => {
    return await prisma.item.create({
        data: {
            name: item.name,
            popularity: item.popularity
        }
    })
}

export const listItems = async () => {
    return await prisma.item.findMany()
}

export const findItem = async (id: number) => {
    return await prisma.item.findUnique({
        where: { id: id }
    })
}

export const updateItem = async (item: Item) => {
    return await prisma.item.update({
        where: { id: item.id },
        data: {
            ...item
        }
    })
}

export const deleteItem = async (id: number) => {
    return await prisma.item.delete({
        where: { id: id }
    })
}