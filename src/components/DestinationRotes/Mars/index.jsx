import React from 'react'
import mars from '../../../assets/destination/image-mars.png'

export const Mars = () => {
    return (
        <>
            <img className='absolute inset-0 w-[400px] h-[400px] ml-[210px] mt-[260px] ' src={mars} alt="mars" />
            <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >MARS</h1>
            <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-4 mb-6 ' >Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
                the tallest planetary mountain in our solar system. It’s two and a half times
                the size of Everest!</p>
            <div className=' flex gap-[80px] py-[30px] border-t border-gray-500 ' >
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >AVG. DISTANCE</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >225 MIL. KM</h1>
                </div>
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >EST. TRAVEL TIME</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >9 MONTHS</h1>
                </div>
            </div>
        </>
    )
}
