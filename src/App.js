import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PageBody from "./components/PageBody/PageBody"
import { MenuItems } from "./components/Navbar/MenuItems";
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {lastClicked: MenuItems[0].title};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    this.setState({
      lastClicked: value
    })
    
 }

 componentDidUpdate(prevProps, prevState) {
  console.log(this.state.lastClicked);
}

  render(){
    return (
    <div className="app">
      <Navbar clickFunction={this.handleClick} />
      <PageBody lastClicked={this.state.lastClicked} />
    </div>
  );
  }
  
}

export default App;
