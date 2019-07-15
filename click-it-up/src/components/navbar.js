import React, { Component } from "react";
import "../components/navbar.css"


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">How good is your Memory ?</li>
          <li className="itemRight">Doggo Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;