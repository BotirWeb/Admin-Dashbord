import React from 'react'
import './Circle.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Circle() {
  return (
    <div className='circle'>
        <Sidebar />
        <div className="circleContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Circle