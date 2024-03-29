"use client"
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { useRouter } from 'next/navigation'

const Game = ({ items }: { items: Item[] }) => {
    const router = useRouter()

    const [leftItem, setLeftItem] = useState<Item>(items[0])
    const [rightItem, setRigthItem] = useState<Item>(items[1])
    useEffect(() => {
        router.prefetch(leftItem.id > rightItem.id ? items[leftItem.id + 1].photoUrl : items[rightItem.id + 1].photoUrl)
        console.log(`prefetching ${leftItem.id > rightItem.id ? items[leftItem.id + 1].photoUrl : items[rightItem.id + 1].photoUrl}`)
    }, [leftItem, rightItem])
    //Game Logic
    const handleElection = (election: 'left' | 'right') => {
        if (election === 'left') {
            if (leftItem.popularity >= rightItem.popularity) {
                const id = leftItem.id > rightItem.id ? leftItem.id : rightItem.id
                setRigthItem({ ...items[id + 1] })
            } else {
                console.log('Loser')
            }
        }
        if (election === 'right') {
            if (rightItem.popularity >= leftItem.popularity) {
                const id = leftItem.id > rightItem.id ? leftItem.id : rightItem.id
                setLeftItem({ ...items[id + 1] })
            } else {
                console.log('Loser')
            }
        }
    }

    return (
        <>
            <Item
                {...leftItem}
                onClick={() => handleElection('left')}
                position='start' />
            <div className='flex-auto z-10 max-h-0 flex items-center justify-center max-w-0'>
                <div className='group-has-[.start:hover]:-rotate-12 group-has-[.end:hover]:rotate-12 transition-all duration-300 ease-in-out md:p-4 md:text-6xl p-2 text-4xl bg-slate-700 rounded-xl z-10'>OR</div>
            </div>
            <Item
                {...rightItem}
                onClick={() => handleElection('right')}
                position='end'
            />
        </>
    )
}

export default Game