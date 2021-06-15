import React, { Component } from "react";
import "./TitleLogoYear.css";

class TitleLogoYear extends Component {
  render() {
    return (
      <div className="title-logo-year">
        <div className="left">
          <div className="company-title">{this.props.company}</div>
        </div>
        <div className="right">{this.props.period}</div>
      </div>
    );
  }
}

export default TitleLogoYear;