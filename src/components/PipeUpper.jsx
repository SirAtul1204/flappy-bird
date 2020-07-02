import React, { Component } from "react";
import pipe1 from "../images/pipe1.png";
import "../game.css";

class PipeUpper extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <img
          src={pipe1}
          alt="pipeUpper"
          className="pipeUpper"
          style={{ left: this.props.pos, height: this.props.upperPipeLength }}
        />
      </React.Fragment>
    );
  }
}

export default PipeUpper;
