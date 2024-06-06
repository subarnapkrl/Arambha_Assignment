import React from 'react'
import { linkData } from '../../data'
import { LuBell } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";


import { Link } from 'react-router-dom'
import Icon from '../../Icon';

const Navbar = () => {
  return (
    <>
   
    <div className='navbar'>
     
     <div className="logoArea">
              <Icon/>
        <h1 className='logoHeading'>boostim</h1>
     </div>
      
        <div className="links">
            {
                linkData.map((links)=>(
                    <ul className='lists' key={links.id}>
                        <li>
                            {links.name}
                         <FaAngleDown />
                            </li>
                    </ul>
                ))
            }
        </div>
        <div className="notifications">
            <button className="startBtn">
                Get Started
            </button>
            <div className="notificationBtn">
                <LuBell width={'18px'} height={'15px'} />

            </div>
        </div>
    </div>
     </>
  )
}

export default Navbar