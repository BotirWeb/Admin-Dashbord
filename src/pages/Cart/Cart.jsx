import React from 'react'
import './Cart.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Cart() {
  return (
    <div className='cart'>
        <Sidebar />
        <div className="cartContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Cart