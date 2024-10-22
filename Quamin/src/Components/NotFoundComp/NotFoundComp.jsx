import React from 'react'
import { Link } from 'react-router-dom';
import "./NotFoundComp.css"
import img404 from "../../assets/404.svg"

const NotFoundComp = () => {
  return (
    <div className='cont-404'>
        <img src={img404} alt="404 not found" />
        <Link to="/"><button className='btn'>Back to Home</button></Link>
    </div>
  )
}

export default NotFoundComp