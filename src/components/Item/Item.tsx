import Image from 'next/image'
import React, { ReactNode } from 'react'

const Item = ({ name, popularity, photoUrl, position = 'start', onClick, preloadedImage }: { name: string, popularity: number, photoUrl: string, position?: 'end' | 'start', onClick: () => void, preloadedImage?: ReactNode }) => {
    return (
        <div className={` md:w-1/2 md:has-[.attention:hover]:w-3/4 md:has-[attention:hover]:h-full md:h-full w-full h-1/2 has-[attention:hover]:h-3/4 bg-cover relative bg-center flex-auto bg-rose-500 transition-all duration-500 ease-in-out flex justify-center items-center`}>
            {preloadedImage ?
                preloadedImage
                :
                <Image priority fetchPriority='high' src={photoUrl} alt='Hola' className='object-cover object-center' fill />
            }
            <div onClick={onClick} className={`${position} attention peer ${position === 'start' ? `left-0 top-0` : `right-0 bottom-0`} md:w-3/4 cursor-pointer md:h-full w-full h-3/4 absolute z-20`} ></div>
            <div className='w-full h-full peer-hover:backdrop-blur-0 peer-hover:bg-transparent transition-all duration-500 bg-black/40 backdrop-blur-sm absolute ' />
            <div className='z-10 flex justify-center items-center'>
                <h4>{name} {popularity}</h4>
            </div>
        </div>
    )
}

export default Item