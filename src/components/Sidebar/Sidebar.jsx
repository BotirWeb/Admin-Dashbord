import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'

import { IoMdHome } from "react-icons/io";
import { RiBankCardLine } from "react-icons/ri";
import { TbWaveSine } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { PiCards } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { PiDotsThreeCircleBold } from "react-icons/pi";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuLeft } from "react-icons/cg";



function Sidebar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    
  return (
    <div className={isActive ? 'sidebar active' : 'sidebar'}>
        <div className="navbarGamburger" onClick={handleClick}>
            <GiHamburgerMenu />
        </div>
        <div className="top" onClick={handleClick}>
            <CgMenuLeft />
        </div>
        <div className="bottom">
            <ul>
                
                <li>
                    <NavLink to={"/"}>
                        <IoMdHome />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/card"}>
                        <RiBankCardLine />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/wave"}>
                        <TbWaveSine />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/data"}>
                        <BsDatabase />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/storage"}>
                        <PiCards />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/mail"}>
                        <MdOutlineMail />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/message"}>
                        <FaRegMessage />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/cart"}>
                        <BsCart2 />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/circle"}>
                        <PiDotsThreeCircleBold />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/circlePlus"}>
                        <HiOutlinePlusCircle />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/calendar"}>
                        <IoCalendarClearOutline />
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar