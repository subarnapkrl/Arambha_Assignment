import React from 'react'
import { linkData } from '../../data'
import { LuBell } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";


import Icon from '../../Icon';
import { Link } from 'react-router-dom';

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
                            <Link to={'/progress'} className='navLink'>
                            {links.name}
                            </Link>
                            
                         <FaAngleDown />
                            </li>
                    </ul>
                ))
            }
        </div>
        <div className="notifications">
            <Link to={'/progress'} className="startBtn">
                Get Started
            </Link>
            <div className="notificationBtn">
                <LuBell width={'18px'} height={'15px'} />

            </div>
        </div>
    </div>
     </>
  )
}

export default Navbar