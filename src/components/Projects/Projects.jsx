import React,{useEffect} from "react";
import "./Projects.css";
import ExternalLinks from "../ExternalLinks";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const projects = {
    Fightfu: {
      desc: "A 2D,two player fighting game made in Javascript",
      techStack: "HTML, CSS, JAVASCRIPT",
      link: "https://github.com/JamesMokua/fightfu",
      open: "https://fightfu.netlify.app/",
    },
    "Curved Carousel": {
      desc: "A carousel with curved edges that loops images across the screen",
      techStack: "React, CSS",
      link: "https://github.com/JamesMokua/curved-carousel",
      open: "https://curvedcarousel.netlify.app/",
    },
    "Self Driving Car": {
      desc: "This is a self driving car simulation that implements neural networks and machine learning",
      techStack: "JavaScript",
      link: "https://github.com/JamesMokua/self-driving-car",
    },
    "Twitter Bot": {
      desc: "Built a GPT-3 Powered Twitter Bot that automatically sends tweets after a given amount of time based on a chosen topic",
      techStack: " Node.js, Firebase, Twitter API",
      link: "https://github.com/JamesMokua/twitter-bot",
      open: "",
    },
    "Sauti": {
      desc: "Sauti is a music player app built in React Native. It allows the user tp play,pause,skip, fast forward and rewind among other functionalities",
      techStack: "React Native,Redux,Expo",
      link: "https://github.com/JamesMokua/sauti",
      open: "",
    },
    "Sayari": {
      desc: "It is a web application made using the NASA API and it displays all astronomical data",
      techStack: "React,Fluent UI, Nasa-API",
      link: "https://github.com/JamesMokua/Sayari",
      open: "",
    },
  };
  return (
    <div id="projects">
      <div className="projects-heading" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50" >
        <span className="projects-num">03. </span>Some things I've built <hr />
      </div>

      <div className="project-container" data-aos="fade-up"  data-aos-duration="2000">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                  openLink={projects[key].open}
                ></ExternalLinks>
              </div>

              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key]["desc"]}</div>
              <div className="card-tech">{projects[key]["techStack"]}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
