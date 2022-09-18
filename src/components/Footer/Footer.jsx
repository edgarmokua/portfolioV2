import React,{useEffect} from 'react'
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="credits">
       
    <div className="ending-credits" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50">
      <div>Built and designed by Edgar Mokua. </div>
      <div>All rights reserved. ©{new Date().getFullYear()}</div>
    </div>
  </div>
  )
}

export default Footer