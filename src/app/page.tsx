import Item from '@/components/Item/Item'
import React from 'react'

const loadItems = async () => {
  const res = await fetch('http://localhost:3000/api/')
  const data = await res.json()
  return data
}

const Home = async () => {
  return (
    <>
      <div className='group flex flex-col md:flex-row relative justify-center items-center w-screen h-dvh overflow-hidden'>
        <Item
          name='David'
          imageUrl='https://phantom-marca-mx.unidadeditorial.es/6c3713a75c19a61f263ca12c4cfeff20/resize/1200/f/jpg/mx/assets/multimedia/imagenes/2023/06/05/16859985858899.jpg'
          popularity={20}
          position='start'
        />
        <div className='flex-auto z-10 max-h-0 flex items-center justify-center max-w-0'>
          <div className='group-has-[.start:hover]:-rotate-45 group-has-[.end:hover]:rotate-45 transition-all duration-300 ease-in-out md:p-4 md:text-6xl p-2 text-4xl bg-slate-700 rounded-xl z-10'>OR</div>
        </div>
        <Item
          name='Alan'
          imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bicho_G%C3%B3mez_en_la_Feria_de_Teatro_x_la_Identidad_en_Tecn%C3%B3polis_%28cropped%29.jpg/640px-Bicho_G%C3%B3mez_en_la_Feria_de_Teatro_x_la_Identidad_en_Tecn%C3%B3polis_%28cropped%29.jpg'
          popularity={20}
          position='end'
        />
      </div>
    </>
  )
}

export default Home