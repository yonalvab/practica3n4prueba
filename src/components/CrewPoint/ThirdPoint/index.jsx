import React from 'react'
import mark from '../../../assets/crew/image-mark-shuttleworth.png'

export const ThirdPoint = () => {
    return (
        <>
            <div className=' w-[550px] h-[400px] pt-[140px] ' >
                <div className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >02</h3>MEET YOUR CREW</div>
                <div className=' mt-[120px] ' >
                    <h2 className=' text-gray-500 text-[33px] font-barlow font-[400] h-[50px]  ' >MISSION SPECIALIST</h2>
                    <h1 className=' text-white text-[50px] font-barlow font-[400] h-[50px]' >MARK SHUTTLEWORTH</h1>
                    <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mt-7 w-[400px] ' >Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                        the Linux-based Ubuntu operating system. Shuttleworth became the first South
                        African to travel to space as a space tourist. </p>
                </div>

            </div>
            <div className=' w-[380px] flex justify-center mt-[169px] mr-[100px]  ' >
                <img src={mark} alt="mark" />
            </div>
        </>
    )
}



