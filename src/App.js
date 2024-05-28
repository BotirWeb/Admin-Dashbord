import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import Wave from './pages/Wave/Wave'
import Data from './pages/Data/Data'
import Storage from './pages/Storage/Storage'
import Mail from './pages/Mail/Mail'
import Message from './pages/Message/Message'
import Cart from './pages/Cart/Cart'
import Circle from './pages/Circle/Circle'
import CirclePlus from './pages/CirclePlus/CirclePlus'
import Calendar from './pages/Calendar/Calendar'

function App() {
  return (
    <div className='app'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/wave' element={<Wave />}/>
          <Route path='/data' element={<Data />}/>
          <Route path='/storage' element={<Storage />}/>
          <Route path='/mail' element={<Mail />}/>
          <Route path='/message' element={<Message />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/circle' element={<Circle />}/>
          <Route path='/circlePlus' element={<CirclePlus />}/>
          <Route path='/calendar' element={<Calendar />}/>
        </Routes>
    </div>
  )
}

export default App