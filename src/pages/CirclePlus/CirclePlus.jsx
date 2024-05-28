import React from 'react'
import './CirclePlus.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { NavLink } from 'react-router-dom'

function CirclePlus() {
  return (
    <div className='circlePlus'>
        <Sidebar />
        <div className="circlePlusContainer">
            <NavLink />
        </div>
    </div>
  )
}

export default CirclePlus