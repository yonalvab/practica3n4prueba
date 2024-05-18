import React from 'react'
import spaceport from '../../../assets/technology/image-spaceport-portrait.jpg'

export const NumberTwo = () => {
    return (
        <>
            <div className=' flex flex-col gap-10 h-[400px]  ' >
                <h2 className=' text-gray-500 text-[23px] font-barlow font-[300] h-[5px]  ' >THE TERMINOLOGY...</h2>
                <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px] w-[500px] ' >SPACEPORT</h1>
                <p className=' text-white text-[18px] font-barlow font-[100] line-clamp-7 mt-1 w-[400px] ' >A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
                    by analogy to the seaport for ships or airport for aircraft. Based in the
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage
                    of the Earth’s rotation for launch. </p>
            </div>
            <div className=' absolute inset-0  w-[700px] flex justify-end mt-[200px] ml-[740px] ' >
                <img className='w-[470px] h-[480px] ' src={spaceport} alt="spaceport" />
            </div>
        </>
    )
}
