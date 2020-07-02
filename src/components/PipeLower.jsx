import React, { Component } from "react";
import pipe2 from "../images/pipe2.png";
import "../game.css";

class PipeLower extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={pipe2}
          alt="pipe2"
          className="pipeLower"
          style={{
            left: this.props.pos,
            height: 650 - (this.props.upperPipeLength + 116),
            top:
              2 * this.props.upperPipeLength + 116 - this.props.upperPipeLength,
          }}
        />
      </React.Fragment>
    );
  }
}

export default PipeLower;
