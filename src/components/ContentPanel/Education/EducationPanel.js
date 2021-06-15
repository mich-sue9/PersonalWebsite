import React, { Component } from "react";
import {
  EducationUniversity,
  SecondaryEducation,
  OtherEducation,
} from "./EducationPanelContent";
import Heading from "../../TextDisplay/Heading";
import TitleLogoYear from "../../TextDisplay/TitleLogoYear";
import SubHeading from "../../TextDisplay/SubHeading";
import Category from "../../TextDisplay/Category";
import Logo from "../../TextDisplay/Logo";
class EducationPanel extends Component {

  render() {
    return (
      <div>
        
        <div>
          <SubHeading subHeading={EducationUniversity.sectionTitle} />
          <TitleLogoYear
            company={EducationUniversity.institution}
            period={EducationUniversity.years}
          />
          <Logo logo={EducationUniversity.logo}/>
          {EducationUniversity.sectionContent.map((item, index) => {
            return (<Category key={index} category={item.category} content={item.content}/>)
          })}
        </div>
        <Heading heading="~~~"/>
        <div>
          <SubHeading subHeading={SecondaryEducation.sectionTitle} />
          <TitleLogoYear
            company={SecondaryEducation.institution}
            logo={EducationUniversity.logo}
            period={SecondaryEducation.years}
          />
          <Logo logo={SecondaryEducation.logo}/>
          {SecondaryEducation.sectionContent.map((item, index) => {
            return (<Category key={index} category={item.category} content={item.content}/>)
          })}
        </div>
        <Heading heading="~~~"/>
        
        <div>
          <SubHeading subHeading={OtherEducation.sectionTitle} />
          {OtherEducation.sectionContent.map((item, index) => {
            return (<Category key={index} category={item.category} content={item.content}/>)
          })}
        </div>
        
      </div>
    );
  }
}

export default EducationPanel;
