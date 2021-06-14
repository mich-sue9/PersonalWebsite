import React, { Component } from "react";
import Heading from "../../TextDisplay/Heading";
import {skills} from "./SkillsPanelContent";
import Category from "../../TextDisplay/Category";
class SkillsPanel extends Component {
  render() {
    return (
      <div className="skills-panel">
        <Heading heading="Skills" />
          {skills.map((item, index) => {
            return (
              <Category key={index} category={item.category} content={item.content} />
            );
          })}

      </div>
    );
  }
}

export default SkillsPanel;
