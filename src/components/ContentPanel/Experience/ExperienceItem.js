import React, { Component } from "react";
import "./ExperienceItem.css";
import TitleLogoYear from "../../TextDisplay/TitleLogoYear";
import Category from "../../TextDisplay/Category";
/***
 * Used to create section for items in a particular category.
 */
class ExperienceItem extends Component {
  render() {
    return (
      <div className="experienceItem">
        <TitleLogoYear company={this.props.company} logo={this.props.logo} period={this.props.period} />
        <div className="introduction">
          <div className="title">Role: {this.props.title}</div>
          <div className="Description">{this.props.description}</div>
        </div>
        <div className="Contributions">
          {this.props.accomplishments.map((item, index) => {
            return (
              <Category key={index} category={item.category} content={item.content}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
