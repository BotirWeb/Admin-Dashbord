import React from 'react'
import './Storage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Storage() {
  return (
    <div className='storage'>
        <Sidebar />
        <div className="storageContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Storage