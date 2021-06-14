import React, { Component } from "react";
import "./Paragraph.css";

class Paragraph extends Component{
    render(){
        return(
            <div className="paragraph">
                {this.props.text}
            </div>
        );
    }
}

export default Paragraph;