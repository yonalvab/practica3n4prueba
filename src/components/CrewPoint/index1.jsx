import React from 'react'

import mujer from '../../assets/crew/image-anousheh-ansari.png'
import { Route, Routes } from 'react-router-dom'
import { FirstPoint } from './FirstPoint'
import { SecondPoint } from './SecondPoint'
import { ThirdPoint } from './ThirdPoint'
import { FourthPoint } from './FourthPoint'

export const CrewRoutes = () => {
    return (
        <Routes>
            <Route index element={<DefaultCrew />} />
            <Route path='firstpoint' element={<FirstPoint />} />
            <Route path='secondpoint' element={<SecondPoint />} />
            <Route path='thirdpoint' element={<ThirdPoint />} />
            <Route path='fourthpoint' element={<FourthPoint />} />
        </Routes>
    )
}

export const DefaultCrew = () => {
    return (
        <>
            <div className=' w-[500px] h-[400px] pt-[140px] ' >
                <div className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >02</h3>MEET YOUR CREW</div>
                <div className=' mt-[120px] ' >
                    <h2 className=' text-gray-500 text-[33px] font-barlow font-[400] h-[60px]  ' >FLIGHT ENGINEER</h2>
                    <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px]' >ANOUSHEH ANSARI</h1>
                    <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mt-7 w-[400px] ' >Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to
                        fly to the ISS, and the first Iranian in space. </p>
                </div>

            </div>
            <div className=' w-[520px] flex justify-center mt-[187px]  ' >
                <img src={mujer} alt="mujer" />
            </div>
        </>
    )
}

