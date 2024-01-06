import { items } from '@/DummyData'
import Game from '@/components/Game/Game'
import Item from '@/components/Item/Item'
import React from 'react'

// const loadItems = async () => {
//   const res = await fetch('http://localhost:3000/api/')
//   const data = await res.json()
//   return data
// }

const loadItems = async () => {

  return items.map((item, index) => { return { ...item, id: index } })
}

const Home = async () => {
  return (
    <>
      <div className='group flex flex-col md:flex-row relative justify-center items-center w-screen h-dvh overflow-hidden'>
        <Game items={await loadItems()} />
      </div>
    </>
  )
}

export default Home