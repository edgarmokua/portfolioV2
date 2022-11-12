import React,{useEffect} from "react";
import "./About.css";
import person from "../../images/person.JPG";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const two = (
    <p>
      Outside of work, I'm interested in following the advancement of
      technology. I also play a lot of video games and make TikToks while
      participating in Hackathons from time to time
    </p>
  );
  const tech_stack = [
    "Javascript ES6+",
    "Python",
    "React.js",
    "Java",
    "Node.js",
    "HTML & CSS",
    "Typescript",
    "Three JS",
    "SQL",
  ];

  const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
  return (
    <div id="about">
      <div className="about-heading" data-aos="fade-up"  data-aos-duration="1000">
        <span className="about-num">01. </span>About Me <hr />
      </div>
      <div className="container">
        <p className="about-text" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50">
          Hello! My name is Edgar and I enjoy creating things that live on the
          internet. I am a <span className="highlight"> 4th year </span>Business
          Information Technology student at the{" "}
          <span className="highlight">
            {" "}
            Jomo Kenyatta University of Agriculture and Technology.
          </span>{" "}
          I am passionate about building software that is both beautiful and
          functional. I am currently{" "}
          <span className="highlight">
            looking for a full-time graduate software engineering position for
            2023.
          </span>
          <div className="about-description">
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack" data-aos="fade-up"  data-aos-duration="2000">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <div>
                    <li>{tech_item}</li>
                  </div>
                );
              })}
            </ul>
            {[two]}
          </div>
        </p>
        <div className="about-image" data-aos="fade-up"  data-aos-duration="2000">
          <img src={person} alt="person" className="person" />
        </div>
      </div>
    </div>
  );
};

export default About;
