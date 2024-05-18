import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './index.css'
import { Home } from './components/Home'
import { Destination } from './components/Destination'
import { Crew } from './components/Crew'
import { Technology } from './components/Technology'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <div  >
          <div className='relative' >
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/destination/*' element={<Destination />} />
              <Route path='/crew/*' element={<Crew />} />
              <Route path='/technology/*' element={<Technology />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
