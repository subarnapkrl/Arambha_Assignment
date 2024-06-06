import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import FirstIcon from '../../svgs/First';
import SecondIcon from '../../svgs/Second';
import ThirdIcon from '../../svgs/Third';
import SmallIcon from '../../svgs/Small';
import CompanyIcon from '../../svgs/Company';

const Hero = () => {
  return (
    <main className="container">
        <div className="areas">
            <div className="firstArea">
                <h1>Stay ahead of the curve with our forward-thinking </h1>
                <p>An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.</p>
                <div className="cta">
                    <button className='btn1'>
                        
                       <p>Schedule Call </p> 
                        <FaArrowRight /> </button>
                    <button className='btn2'>View Case Study</button>
                </div>
            </div>
            <div className="secondArea">
                
                <SecondIcon/>
                <FirstIcon/>
                <ThirdIcon/>
                <SmallIcon/>
            </div>
            <div className="thirdArea">
                <div className="moto">
                   <p>Trusted by the world's biggest brands</p> 
                </div>
                <div className="comapnies">
                    <CompanyIcon className="companylogo" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero