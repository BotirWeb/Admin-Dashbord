import React from 'react'
import './Calendar.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Calendar() {
  return (
    <div className='calendar'>
        <Sidebar />
        <div className="calendarContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Calendar