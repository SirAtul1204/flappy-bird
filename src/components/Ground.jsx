import React, { Component } from "react";
import ground from "../images/ground.png";
import "../game.css";

class Ground extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={ground} alt="ground" id="ground" />
      </React.Fragment>
    );
  }
}

export default Ground;
