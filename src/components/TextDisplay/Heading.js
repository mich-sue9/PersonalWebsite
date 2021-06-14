import React, { Component } from "react";
import "./Heading.css";
class Heading extends Component{
    render(){
        return(
            <div className="panel-heading "><span>{this.props.heading}</span></div>
        )
    }
}

export default Heading;