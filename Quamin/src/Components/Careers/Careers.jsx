import React from 'react'
import "./Careers.css"
import gallery_1 from "../../assets/salesmanager.png"
import gallery_2 from "../../assets/cybersecurity.png"
import gallery_3 from "../../assets/enterprisearchitect.png"
import gallery_4 from "../../assets/accountmanager.png"

const Careers = () => {
  return (
    <div className='careers'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />        
        </div>
        <button className='btn blue-btn'>Apply Now</button>
    </div>
  )
}

export default Careers