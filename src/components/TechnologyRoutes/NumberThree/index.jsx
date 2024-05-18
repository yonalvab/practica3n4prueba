import React from 'react'
import capsule from '../../../assets/technology/image-space-capsule-portrait.jpg'

export const NumberThreee = () => {
    return (
        <>
            <div className=' flex flex-col gap-10 h-[400px]  ' >
                <h2 className=' text-gray-500 text-[23px] font-barlow font-[300] h-[5px]  ' >THE TERMINOLOGY...</h2>
                <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px] w-[500px] ' >SPACE CAPSULE</h1>
                <p className=' text-white text-[18px] font-barlow font-[100] line-clamp-7 mt-1 w-[400px] ' >A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                    you'll spend your time during the flight. It includes a space gym, cinema,
                    and plenty of other activities to keep you entertained. </p>
            </div>
            <div className=' absolute inset-0  w-[700px] flex justify-end mt-[200px] ml-[740px] ' >
                <img className='w-[470px] h-[480px] ' src={capsule} alt="capsule" />
            </div>
        </>
    )
}
