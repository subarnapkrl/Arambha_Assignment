import React from 'react'
import BannerIcon from '../../svgs/Banner'

const Content = () => {
  return (
    <section className="section">
        <div className="area1">
            <h1>Provide the best service with out of the box ideas</h1>
            <p>we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
        </div>
        <div className="area2">
            <BannerIcon/>
            <img src="./www.jpg" alt="" className='image'/>
        </div>
        
    </section>
  )
}

export default Content