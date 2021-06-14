import React, { Component } from "react";
import { MenuItems } from "../Navbar/MenuItems";
import EducationPanel from "./Education/EducationPanel";
import HomePanel from "./Home/HomePanel";
import ExperiencePanel from "./Experience/ExperiencePanel";
import SkillsPanel from "./Skills/SkillsPanel";
import ContactMe from "./ContactMe/ContactMe";
import "./ContentPanel.css";
class ContentPanel extends Component {
    render() {
      let display;
      if (this.props.lastClicked === MenuItems[4].title){
        display = <ContactMe/>
      } else if (this.props.lastClicked === MenuItems[1].title){
        display = <EducationPanel/>
      } else if (this.props.lastClicked === MenuItems[2].title){
        display = <ExperiencePanel/>
      } else if (this.props.lastClicked === MenuItems[3].title){
        display = <SkillsPanel/>
      } else display =<HomePanel/>
      return (
          <div className="content-panel">
            {display}
          </div>
      )
    }
}
  export default ContentPanel;