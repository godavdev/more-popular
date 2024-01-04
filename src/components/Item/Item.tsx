import React from 'react'

const Item = ({ name, popularity, imageUrl }: { name: string, popularity: number, imageUrl: string }) => {
    return (
        <div  className='hover:bg-rose-500 w-1/2 group-has-[:hover]:bg-red-700 has-[:hover]:w-3/4 bg-cover bg-center flex-auto bg-rose-500 h-full transition-all duration-500 ease-in-out flex justify-center items-center'>
            <div className='w-4/6 h-full flex justify-center items-center bg-slate-700'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Item