import React, { Component } from "react";
import "../game.css";
import PipeLower from "./PipeLower";
import PipeUpper from "./PipeUpper";

class PipePair extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <PipeUpper
          pos={this.props.pos}
          upperPipeLength={this.props.upperPipeLength}
        />
        <PipeLower
          pos={this.props.pos}
          upperPipeLength={this.props.upperPipeLength}
        />
      </React.Fragment>
    );
  }
}

export default PipePair;
