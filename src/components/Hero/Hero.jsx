import React,{useEffect} from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "./Hero.css";
import {IoMdMail} from 'react-icons/io'
import Donut from "./Donut";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="hero">
      <div className="hero-container" >
      <div className="type">
        <span className="textOne" data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">Hi, my name is</span>
        <Typist avgTypingDelay={120} className="textTwo">
        Edgar Mokua
        </Typist>
        <span className="textThree"  data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">
        I build things sometimes.
        </span>
      </div>
      <h2 className="summary" data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">
        I'm a<span className="light"> software engineer</span>  based in<span className="light"> Nairobi, Kenya.</span> I have great
        interest in full-stack development, artificial intelligence,
        human-computer interactions, and everything in between.
      </h2>
      <Box sx={{ width: '100%' }} data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{backgroundColor: 'red'}}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, backgroundColor: "#ccd6f6",color:"#0a192f",fontFamily:'NTR',fontSize:'1.5rem' }}
        >
          email me: jamieedgar02@gmail.com
        </Alert>
      </Collapse>
      <button className='btnmore'    onClick={() => {
          setOpen(!open);
        }}   ><IoMdMail className="mail"/>Say Hi!</button>
      </Box>
      </div>
      <div className="donut" data-aos="fade-up"  data-aos-duration="2000">
      <Donut/>
     
      </div>
    </div>
  );
};

export default Hero;
