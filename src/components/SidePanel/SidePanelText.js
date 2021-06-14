import React, { Component } from "react";
import ContactPlatforms from "../ContentPanel/ContactMe/ContactPlatforms";
import Paragraph from "../TextDisplay/Paragraph";
import SubHeading from "../TextDisplay/SubHeading";
import { Description } from "./SidePanelContent";
import {otherPlatforms} from "../ContentPanel/ContactMe/ContactMeContent";
import "./SidePanelText.css";

class SidePanelText extends Component{
    render(){
        return(
            <div className="side-panel-text">
                <SubHeading subHeading="Welcome!"/>
                <Paragraph text={Description.text} />
                <ContactPlatforms platforms={otherPlatforms} />
            </div>
        );
    }
}

export default SidePanelText;