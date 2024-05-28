import React from 'react'
import './Wave.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Wave() {
  return (
    <div className='wave'>
        <Sidebar />
        <div className="waveContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Wave