import React from 'react'
import './Data.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Data() {
  return (
    <div className='data'>
        <Sidebar />
        <div className="dataContainer">
            <Navbar/>
        </div>
    </div>
  )
}

export default Data