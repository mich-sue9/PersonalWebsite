import React, { Component } from "react";
import headShot from "./headshot.jpg";

import "./SidePanel.css";
import SidePanelText from "./SidePanelText";

class SidePanel extends Component {
  render() {
    return (
      <div className="side-panel">
        <img src={headShot} alt="Michelle Headshot" className="head-shot" />
        <SidePanelText/>
      </div>
    );
  }
}

export default SidePanel;
