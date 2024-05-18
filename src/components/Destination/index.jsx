import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DestinationRoutes } from '../DestinationRotes'
import backdestination from '../../assets/destination/background-destination-desktop.jpg'

export const Destination = () => {
    const location = useLocation()

    return (
        <>
            <div>
                <img className=' absolute w-screen h-screen ' src={backdestination} alt="backdestination" />
                <div className=' relative flex justify-center pt-[150px] gap-[100px] ' >
                    <div className=' w-[400px] h-[400px] ' >
                        <div className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >01</h3>PICK YOUR DESTINATION</div>


                    </div>
                    <div className=' w-[600px] h-[200px] pl-[150px] pt-[85px]' >
                        <div className='h-[50px] w-[320px] flex py-2 px-2 ' >
                            <ul className='flex gap-12 ' >
                                <Link to='/destination/moon' >
                                    <li className={`text-white text-[16px] h-[40px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/destination/moon' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >MOON</li>
                                </Link>
                                <Link to='/destination/mars'>
                                    <li className={`text-white text-[16px] h-[40px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/destination/mars' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >MARS</li>
                                </Link>
                                <Link to='/destination/europa' >
                                    <li className={`text-white text-[16px] h-[40px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/destination/europa' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >EUROPA</li>
                                </Link>
                                <Link to='/destination/titan'>
                                    <li className={`text-white text-[16px] h-[40px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/destination/titan' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >TITAN</li>
                                </Link>
                            </ul>
                        </div>
                        <DestinationRoutes />
                    </div>
                </div>
            </div>
        </>
    )
}
