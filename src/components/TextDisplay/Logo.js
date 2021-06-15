import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component{
    render(){
        return(
            <div className="logo">
                <img src={this.props.logo} alt="logo" className="logoPicture" />
            </div>
        );
    }
}

export default Logo;