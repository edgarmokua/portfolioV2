import React, { useState,useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactGA from "react-ga";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? 'nav-wrapper active' : 'nav-wrapper'}>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#64ffda" }} />
        ) : (
          <FaBars size={30} style={{ color: "#64ffda" }} />
        )}
      </div>
      <nav>
        <div  className={color ? 'nav-wrapper active' : 'nav-wrapper'} >
          <div className="logo-wrapper" data-aos="fade-down"  data-aos-duration="2000" >
            
              {" "}
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={18}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Home");
                  closeMenu();
                }}
              >
                <img src={logo} alt="logo" className="logo" />
              </Link>
          
          </div>
          <ul className={click ? "navitems active" : "navitems"}>
            <li className="nav-item" data-aos="fade-down"  data-aos-duration="2000" data-aos-delay="50">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={18}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("About");
                  closeMenu();
                }}
              >
                <span className="num">01. </span>
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="100">
              {" "}
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={18}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Experience");
                  closeMenu();
                }}
              >
                <span className="num">02. </span>
                <span>Experience</span>
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-down"  data-aos-duration="2000" data-aos-delay="150">
              {" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={18}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Work");
                  closeMenu();
                }}
              >
                <span className="num">03. </span>
                <span>Work</span>
              </Link>
            </li>

            <li className="nav-item" data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="200">
              <a href="/JAMES EDGAR MOKUA SOFTWARE ENGINEER RESUME.pdf" target="_blank">
              <button className="btn">Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
