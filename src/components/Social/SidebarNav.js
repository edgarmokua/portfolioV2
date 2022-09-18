import React from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./SidebarNav.css";
import "react-typist/dist/Typist.css";




class SidebarNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
   

    return (
      <div className="sidebar-nav">
     
        <div className="sidebar-logos" href="/">
          <a href="mailto:jamieedgar02@gmail.com" target="_blank" rel="noreferrer">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/JamesMokua" target="_blank" rel="noreferrer">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/jamesmokua/" target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
          <a href="https://www.twitter.com/mowkuwa" target="_blank" rel="noreferrer">
            <TwitterIcon style={{ fontSize: 21 }}></TwitterIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
