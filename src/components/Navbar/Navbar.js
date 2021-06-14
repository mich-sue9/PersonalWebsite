import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button/Button";
import SubHeading from "../TextDisplay/SubHeading";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <div className="navbar">
        <SubHeading subHeading="Michelle Lim" />
        <div className="nav-bar-right">
          <div className="menu-icon" onClick={() => this.handleClick()}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className={item.cName}
                    href={item.url}
                    onClick={() => {
                      this.props.clickFunction(item.title);
                      this.handleClick();
                    }}
                  >
                    {" "}
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
