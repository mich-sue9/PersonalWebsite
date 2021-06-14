import React, { Component } from "react";
import "./SubHeading.css";
class SubHeading extends Component{
    render(){
        return(
            <div className="sub-heading ">
                {this.props.subHeading}
            </div>
        )
    }
}

export default SubHeading;