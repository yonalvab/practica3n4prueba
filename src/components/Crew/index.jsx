import React from 'react'
import mujer from '../../assets/crew/image-anousheh-ansari.png'
import { Link, useLocation } from 'react-router-dom'
import { CrewRoutes } from '../CrewPoint/index1'
import backcrew from '../../assets/crew/background-crew-desktop.jpg'

export const Crew = () => {
    const location = useLocation()

    return (
        <>
            <div>
                <img className=' absolute w-screen h-screen ' src={backcrew} alt="backcrew" />
                <div className='relative flex justify-between  px-[140px]  ' >
                    <div className=' absolute flex py-[40px] ' >
                        <ul className=' flex gap-8 mt-[610px] ' >
                            <Link to='/crew/firstpoint' >
                                <li className={`bg-slate-700 rounded-full h-3 w-3 cursor-pointer text-transparent text-[20px] flex justify-center font-black items-center ${location.pathname === '/crew/firstpoint' ? 'bg-slate-300' : 'hover:bg-slate-300'}`} >a</li>
                            </Link>
                            <Link to='/crew/secondpoint' >
                                <li className={`bg-slate-700 rounded-full h-3 w-3 cursor-pointer text-transparent text-[20px] flex justify-center font-black items-center ${location.pathname === '/crew/secondpoint' ? 'bg-slate-300' : 'hover:bg-slate-300'}`} >a</li>
                            </Link>
                            <Link to='/crew/thirdpoint' >
                                <li className={`bg-slate-700 rounded-full h-3 w-3 cursor-pointer text-transparent text-[20px] flex justify-center font-black items-center ${location.pathname === '/crew/thirdpoint' ? 'bg-slate-300' : 'hover:bg-slate-300'}`} >a</li>
                            </Link>
                            <Link to='/crew/fourthpoint' >
                                <li className={`bg-slate-700 rounded-full h-3 w-3 cursor-pointer text-transparent text-[20px] flex justify-center font-black items-center ${location.pathname === '/crew/fourthpoint' ? 'bg-slate-300' : 'hover:bg-slate-300'}`} >a</li>
                            </Link>
                        </ul>
                    </div>
                    <CrewRoutes />
                </div>
            </div>
        </>
    )
}