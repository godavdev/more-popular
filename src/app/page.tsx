import Item from '@/components/Item/Item'
import React from 'react'

const loadItems = async () => {
  const res = await fetch('http://localhost:3000/api/')
  const data = await res.json()
  return data
}

const Home = async () => {
  const items: Item[] = await loadItems()
  return (
    <div className='flex group justify-center items-center w-screen h-dvh overflow-hidden'>
      <Item name='David' imageUrl='https://phantom-marca-mx.unidadeditorial.es/6c3713a75c19a61f263ca12c4cfeff20/resize/1200/f/jpg/mx/assets/multimedia/imagenes/2023/06/05/16859985858899.jpg' popularity={20} />
      <Item name='Alan' imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bicho_G%C3%B3mez_en_la_Feria_de_Teatro_x_la_Identidad_en_Tecn%C3%B3polis_%28cropped%29.jpg/640px-Bicho_G%C3%B3mez_en_la_Feria_de_Teatro_x_la_Identidad_en_Tecn%C3%B3polis_%28cropped%29.jpg' popularity={20} />
    </div>
  )
}

export default Home