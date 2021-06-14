import React, { Component } from "react";
import "./ContactPlatforms.css"

class ContactPlatforms extends Component{
    render(){
        return(
            <div className="contact-platforms">
                {this.props.platforms.map((item, index) => {
                    return (
                    <div key={index} className="contact-platform-category">
                        <div className="contact-platform-category-logo">
                            <a href={item.link}>
                            <i class={item.class}></i>
                            </a>
                        </div>
                        <div className="contact-platform-category-name">{item.platformName}</div>
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default ContactPlatforms;