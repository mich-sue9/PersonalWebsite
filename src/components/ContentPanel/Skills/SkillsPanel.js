import React, { Component } from "react";
import Heading from "../../TextDisplay/Heading";
import {skills, sideProjects} from "./SkillsPanelContent";
import Category from "../../TextDisplay/Category";
import SubHeading from "../../TextDisplay/SubHeading"
class SkillsPanel extends Component {
  render() {
    return (
      <div className="skills-panel">
        <Heading heading="Skills/Projects" />
        <SubHeading subHeading="Skills"/>
          {skills.map((item, index) => {
            return (
              <Category key={index} category={item.category} content={item.content} />
            );
          })}
        <SubHeading subHeading="Side Projects"/>
        {sideProjects.map((item, index) => {
            return (
              <Category key={index} category={item.category} content={item.content} />
            );
          })}

      </div>
    );
  }
}

export default SkillsPanel;
