import React from 'react'
import europa from '../../../assets/destination/image-europa.png'

export const Europa = () => {
    return (
        <>
            <img className='absolute inset-0 w-[400px] h-[400px] ml-[210px] mt-[260px] ' src={europa} alt="mars" />
            <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >EUROPA</h1>
            <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mb-6 ' >The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                winter lover’s dream. With an icy surface, it’s perfect for a bit of
                ice skating, curling, hockey, or simple relaxation in your snug
                wintery cabin.</p>
            <div className=' flex gap-[80px] pt-[30px] border-t border-gray-500 ' >
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >AVG. DISTANCE</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >628 MIL. KM</h1>
                </div>
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >EST. TRAVEL TIME</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >3 YEARS</h1>
                </div>
            </div>
        </>
    )
}
