import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import './ExperienceCategory.css'
import SubHeading from "../../TextDisplay/SubHeading";
import Heading from "../../TextDisplay/Heading";

class ExperienceCategory extends Component {
  render() {
    return (
      <div className="experience-category">
        <SubHeading subHeading={this.props.category} />
        {this.props.items.map((item, index) => {
          return (
            <div className="category-item" key={index}>
              <ExperienceItem
                company={item.company}
                title={item.title}
                period={item.period}
                description={item.description}
                accomplishments={item.accomplishments}
                logo={item.logo}
              />
            </div>
          );
        })}
        <Heading heading="~~~"/>
      </div>
    );
  }
}

export default ExperienceCategory; 
