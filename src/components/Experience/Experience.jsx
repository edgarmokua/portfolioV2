import React,{useEffect} from 'react'
import './Experience.css'
import JobList from './JobList'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='experience' data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50">
       <div className="experience-heading">
        <span className="experience-num">02. </span>Experience <hr />
      </div>
      
      <JobList/>
        </div>
  )
}

export default Experience