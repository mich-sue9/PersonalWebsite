import React, { Component } from "react";
import Heading from "../../TextDisplay/Heading";
import Paragraph from "../../TextDisplay/Paragraph";
import { homePanelContent } from "./HomePanelContent";

class HomePanel extends Component {
  render() {
    return (
      <div>
        <Heading heading="About Michelle" />
        {homePanelContent.map((item, index) => {
          return <Paragraph text={item} key={index} />;
        })}
      </div>
    );
  }
}

export default HomePanel;
