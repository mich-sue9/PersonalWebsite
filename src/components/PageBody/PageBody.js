import "./PageBody.css";
import SidePanel from "../SidePanel/SidePanel";
import ContentPanel from "../ContentPanel/ContentPanel";
import React, { Component } from "react";

class PageBody extends Component {

  render() {
    return (
      <div className="page-body">
        <SidePanel />
        <ContentPanel lastClicked={this.props.lastClicked}/>
      </div>
    );
  }
}

export default PageBody;
