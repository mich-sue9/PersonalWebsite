import React, { Component } from "react";
import "./Category.css";
class Category extends Component {
  render() {
    return (
      <div className="category">
        <div className="category-title">{this.props.category}</div>
        <div className="category-content">
          <ul className="category-content-list">
            {this.props.content.map((item, index) => {
              if (item.subpoint === undefined){
                return  <li className="category-content-list-item" key={index}>{item.point}</li>;
              } else {
                return <li className="category-content-list-item" key={index}>{item.point}<li className="subpoint">{item.subpoint}</li></li>;
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Category;