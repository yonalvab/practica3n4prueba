import React from 'react'
import { NumberOne } from './NumberOne'
import { NumberTwo } from './NumberTwo'
import { NumberThreee } from './NumberThree'
import cohete from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import { Route, Routes } from 'react-router-dom'

export const TechnologyRoutes = () => {
    return (
        <Routes>
            <Route index element={<DefaultTechnology />} />
            <Route path='numberone' element={<NumberOne />} />
            <Route path='numbertwo' element={<NumberTwo />} />
            <Route path='numberthree' element={<NumberThreee />} />
        </Routes>
    )
}

export const DefaultTechnology = () => {
    return (
        <>
            <div className=' flex flex-col gap-10 h-[400px]  ' >
                <h2 className=' text-gray-500 text-[23px] font-barlow font-[300] h-[5px]  ' >THE TERMINOLOGY...</h2>
                <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px] w-[500px] ' >LAUNCH VEHICLE</h1>
                <p className=' text-white text-[18px] font-barlow font-[100] line-clamp-7 mt-1 w-[400px] ' >A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                    it's quite an awe-inspiring sight on the launch pad! </p>
            </div>
            <div className=' absolute inset-0  w-[700px] flex justify-end mt-[200px] ml-[740px] ' >
                <img className='w-[470px] h-[480px] ' src={cohete} alt="cohete" />
            </div>
        </>
    )
}
