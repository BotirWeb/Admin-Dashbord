import React from 'react'
import './Message.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Message() {
  return (
    <div className='message'>
        <Sidebar />
        <div className="messageContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Message