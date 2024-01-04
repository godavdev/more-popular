import React from 'react'

const Item = ({ name, popularity, imageUrl, position = 'start' }: { name: string, popularity: number, imageUrl: string, position?: 'end' | 'start' }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={` md:w-1/2 md:has-[.attention:hover]:w-3/4 md:has-[attention:hover]:h-full md:h-full w-full h-1/2 has-[attention:hover]:h-3/4 bg-cover relative bg-center flex-auto bg-rose-500 transition-all duration-500 ease-in-out flex justify-center items-center`}>
            <div className={`${position} attention peer ${position === 'start' ? `left-0 top-0` : `right-0 bottom-0`} md:w-3/4 md:h-full w-full h-3/4 absolute z-20`} ></div>
            <div className='w-full h-full peer-hover:backdrop-blur-0 peer-hover:bg-transparent transition-all duration-500 bg-black/40 backdrop-blur-sm absolute ' />
            <div className='z-10 flex justify-center items-center'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Item