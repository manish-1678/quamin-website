import React from 'react'
import "./AboutUs.css"
import about_1 from "../../assets/about_1.png"
import about_2 from "../../assets/about_2.png"
import about_3 from "../../assets/about_3.png"
import about_icon_1 from "../../assets/about_icon_1.png"
import about_icon_2 from "../../assets/about_icon_2.png"
import about_icon_3 from "../../assets/about_icon_3.png"

const AboutUs = () => {
  return (
    <div className='aboutus'> 
        <div className='about'>
            <img src={about_1} alt="" />
            <div className="caption">
                <img src={about_icon_1} alt="" />
                <p>Our Mission</p>
            </div>
        </div>
        <div className='about'>
            <img src={about_2} alt="" />
            <div className="caption">
                <img src={about_icon_2} alt="" />
                <p>Our Expertise</p>
            </div>
        </div>
        <div className='about'>
            <img src={about_3} alt="" />
            <div className="caption">
                <img src={about_icon_3} alt="" />
                <p>Our Approach</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs