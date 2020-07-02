import React, { Component } from "react";
import bird from "../images/bird.png";
import "../game.css";
class Bird extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={bird}
          alt="YO"
          id="bird"
          style={{
            top: this.props.birdPos,
            transform: "rotate(" + this.props.birdRotate + "deg)",
          }}
        />
      </React.Fragment>
    );
  }
}

export default Bird;
