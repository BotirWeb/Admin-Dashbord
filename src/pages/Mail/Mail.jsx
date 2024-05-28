import React from 'react'
import './Mail.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Mail() {
  return (
    <div className='mail'>
        <Sidebar />
        <div className="mailContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Mail