import React from 'react'
import cohete from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import { TechnologyRoutes } from '../TechnologyRoutes/index2'
import { Link, useLocation } from 'react-router-dom'
import speedlight from '../../assets/technology/background-technology-desktop.jpg'

export const Technology = () => {
    const location = useLocation()

    return (
        <>
            <div>
                <img className=' absolute w-screen h-screen ' src={speedlight} alt="speedlight" />
                <div className=' relative flex justify-between  pl-[140px]  ' >
                    <div className=' w-[500px] h-[400px] pt-[140px] ' >
                        <div className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >03</h3>SPACE LAUNCH 101</div>
                        <div className=' flex gap-14 mt-[120px] ' >
                            <div>
                                <ul className=' flex flex-col gap-8 ' >
                                    <Link to='/technology/numberone' >
                                        <li className={`bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 cursor-pointer ${location.pathname === '/technology/numberone' ? 'bg-slate-100 text-black' : 'hover:bg-slate-100 hover:text-black'}`} >1</li>
                                    </Link>
                                    <Link to='/technology/numbertwo' >
                                        <li className={`bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 cursor-pointer ${location.pathname === '/technology/numbertwo' ? 'bg-slate-100 text-black' : 'hover:bg-slate-100 hover:text-black'}`} >2</li>
                                    </Link>
                                    <Link to='/technology/numberthree' >
                                        <li className={`bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 cursor-pointer ${location.pathname === '/technology/numberthree' ? 'bg-slate-100 text-black' : 'hover:bg-slate-100 hover:text-black'}`} >3</li>
                                    </Link>
                                </ul>
                            </div>
                            <TechnologyRoutes />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

/* <Link to='/technology/numberone' ><li className=' bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 hover:bg-slate-100 hover:text-black cursor-pointer ' >1</li></Link> */
