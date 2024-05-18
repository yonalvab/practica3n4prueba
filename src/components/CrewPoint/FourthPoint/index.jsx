import React from 'react'
import douglas from '../../../assets/crew/image-douglas-hurley.png'

export const FourthPoint = () => {
    return (
        <>
            <div className=' w-[500px] h-[400px] pt-[140px] ' >
                <div className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >02</h3>MEET YOUR CREW</div>
                <div className=' mt-[120px] ' >
                    <h2 className=' text-gray-500 text-[33px] font-barlow font-[400] h-[60px]  ' >COMMANDER</h2>
                    <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px]' >DOUGLAS HURLEY</h1>
                    <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mt-7 w-[400px] ' >Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                        and former NASA astronaut. He launched into space for the third time as
                        commander of Crew Dragon Demo-2.  </p>
                </div>

            </div>
            <div className=' w-[420px] flex justify-center mt-[158px] mr-[80px]  ' >
                <img src={douglas} alt="douglas" />
            </div>
        </>
    )
}



