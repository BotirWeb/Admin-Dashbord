import React from 'react'
import './Card.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

function Card() {
  return (
    <div className='card'>
      <Sidebar/>
      <div className="card-container">
        <Navbar/> 
      </div>
    </div>
  )
}

export default Card