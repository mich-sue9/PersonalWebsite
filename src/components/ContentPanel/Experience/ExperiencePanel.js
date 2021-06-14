import React, { Component } from "react";
import {
    experienceContent
} from "./ExperiencePanelContent";
import ExperienceCategory from './ExperienceCategory';
import "./ExperiencePanel.css";
import Heading from '../../TextDisplay/Heading';
class ExperiencePanel extends Component {

    render(){
    
        return(
            <div className="experiencePanel">
                <Heading heading="Experiences"/>
                {experienceContent.map((item, index) => {
                    return(
                        <ExperienceCategory key={index} category={item.category} items={item.items}/>
                    );
                })}
            </div>
        );

    }
}

export default ExperiencePanel;