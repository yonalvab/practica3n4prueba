import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Mars } from './Mars'
import { Europa } from './Europa'
import { Titan } from './Titan'
import { Moon } from './Moon'

import mars from '../../assets/destination/image-mars.png'

export const DestinationRoutes = () => {
    return (
        <Routes>
            <Route index element={<DefaultDestination />} />
            <Route path='moon' element={<Moon />} />
            <Route path='mars' element={<Mars />} />
            <Route path='europa' element={<Europa />} />
            <Route path='titan' element={<Titan />} />
        </Routes>
    )
}


export const DefaultDestination = () => {
    return (
        <>
            <img className='absolute inset-0 w-[400px] h-[400px] ml-[210px] mt-[260px] ' src={mars} alt="mars" />
            <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >MARS</h1>
            <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-4 mb-10 ' >Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
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