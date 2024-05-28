import React from 'react'
import './Navbar.scss'
import { IoSearch } from "react-icons/io5";
import sms from "../images/sms.svg"
import bil from "../images/bil.svg"
import avatar from "../images/attractive-laughing-guy-having-fun-smiling-happy 2.png"

import { MdOutlineEmail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";



function Navbar() {
    
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search Anything' />
                <IoSearch className='order'/>
            </div>
            <div className="items">
                <div className="item">
                    {/* <img src={sms} alt="" className='sms'/> */}
                    <MdOutlineEmail className='nav-icons' />
                </div>
                <div className="item">
                    {/* <img src={bil} alt="" /> */}
                    <IoNotificationsOutline className='nav-icons' />
                    <div className="country">5</div>
                </div>
                <div className="item">
                    <img src={avatar} alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar