import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/QuaminMonochrome.png'
import menu_icon from "../../assets/menubar.png"

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="aboutus" smooth={true} offset={-260} duration={500}>About Us</Link></li>
            <li><Link to="book" smooth={true} offset={-150} duration={500}>Services</Link></li>
            <li><Link to="careers" smooth={true} offset={-260} duration={500}>Careers</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>

        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar