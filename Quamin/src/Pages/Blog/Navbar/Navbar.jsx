import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as IntraScroll } from "react-scroll";

import "./Navbar.css";
import logo from "../../../assets/QuaminGoldMain.webp";
import mobileLogo from "../../../assets/mobileGoldLogo.webp";
import menu_icon from "../../../assets/menubar.webp";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = isMobile ? 99999 : 500;
      window.scrollY > scrollValue ? setSticky(true) : setSticky(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const toggleMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/" smooth={true} offset={0} duration={500}>
        <img src={isMobile ? mobileLogo : logo} alt="Logo" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="/"
            smooth={true}
            offset={0}
            duration={500}
            aria-label="home"
          >
            Home
          </Link>
        </li>
        <li>
          <IntraScroll
            to="Section-Story"
            smooth={true}
            offset={-100}
            duration={500}
            aria-label="our story"
          >
            Our Story
          </IntraScroll>
        </li>

        <li>
          <IntraScroll
            to="Subscribe-Button"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            aria-label="subscribe"
          >
            Subscribe
          </IntraScroll>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
