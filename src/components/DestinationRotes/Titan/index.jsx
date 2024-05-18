import React from 'react'
import titan from '../../../assets/destination/image-titan.png'

export const Titan = () => {
    return (
        <>
            <img className='absolute inset-0 w-[400px] h-[400px] ml-[210px] mt-[260px] ' src={titan} alt="mars" />
            <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >TITAN</h1>
            <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mb-6 ' >The only moon known to have a dense atmosphere other than Earth, Titan
                is a home away from home (just a few hundred degrees colder!). As a
                bonus, you get striking views of the Rings of Saturn.
                the size of Everest!</p>
            <div className=' flex gap-[80px] pt-[30px] border-t border-gray-500 ' >
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >AVG. DISTANCE</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >1.6 BIL. KM</h1>
                </div>
                <div>
                    <h3 className=' text-white font-barlow text-[12px] ' >EST. TRAVEL TIME</h3>
                    <h1 className=' text-white font-barlow text-[30px] ' >7 YEARS</h1>
                </div>
            </div>
        </>
    )
}


