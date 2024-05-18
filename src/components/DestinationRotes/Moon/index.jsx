import React from 'react'
import moon from '../../../assets/destination/image-moon.png'

export const Moon = () => {
  return (
    <>
      <img className='absolute inset-0 w-[400px] h-[400px] ml-[210px] mt-[260px] ' src={moon} alt="mars" />
      <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >MOON</h1>
      <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mb-6 ' >See our planet as you’ve never seen it before. A perfect relaxing trip away to help
        regain perspective and come back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.</p>
      <div className=' flex gap-[80px] pt-[30px] border-t border-gray-500 ' >
        <div>
          <h3 className=' text-white font-barlow text-[12px] ' >AVG. DISTANCE</h3>
          <h1 className=' text-white font-barlow text-[30px] ' >384,400 KM</h1>
        </div>
        <div>
          <h3 className=' text-white font-barlow text-[12px] ' >EST. TRAVEL TIME</h3>
          <h1 className=' text-white font-barlow text-[30px] ' >3 days</h1>
        </div>
      </div>
    </>
  )
}
