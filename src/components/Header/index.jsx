import React from 'react'

import logo from '../../assets/shared/logo.svg'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
    const location = useLocation()
    return (
        <header className=' absolute w-full flex justify-between py-8 pl-8 z-10 ' >
            <img className=' w-14 h-14 mt-[5px] ' src={logo} alt="logo" />
            <div className=' absolute ml-[490px] h-[70px] w-[900px] bg-transparent backdrop-blur-xl flex items-center justify-center  ' >
                <ul className='flex gap-16 ' >
                    <Link to='/' >
                        <li className={`text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >00 Home</li>
                    </Link>
                    <Link to='/destination' >
                        <li className={`text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/destination' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >01 Destination</li>
                    </Link>
                    <Link to='/crew' >
                        <li className={`text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/crew' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >02 Crew</li>
                    </Link>
                    <Link to='/technology' >
                        <li className={`text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer font-barlow ${location.pathname === '/technology' ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-white'}`} >03 Technology</li>
                    </Link>
                </ul>
            </div>
            <div className=' absolute  border-b border-gray-500 my-4 h-5 w-[470px] ml-[120px] '></div>
        </header>
    )
}
