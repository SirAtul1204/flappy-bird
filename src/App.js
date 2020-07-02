import React, { Component } from "react";
import Bird from "./components/Bird";
import Ground from "./components/Ground";
import PipePair from "./components/PipePair";

class App extends Component {
  state = {
    gameTimer: null,
    speed: 1,
    pipepos1: 250,
    randomLength1: Math.floor(Math.random() * (450 - 50 + 1) + 50),
    pipepos2: 548,
    randomLength2: Math.floor(Math.random() * (450 - 50 + 1) + 50),
    birdPos: 320,
    birdFall: 3,
    birdJump: 80,
    birdTimer: null,
    birdFalling: true,
    cnt: 0,
    birdRotate: 0,
    score: 0,
  };

  btnPressed = (e) => {
    if (e.key === "Enter") {
      // console.log("Started");
      let gameTimer = setInterval(this.useEffect, 16.66);
      this.setState({ gameTimer: gameTimer });
      let birdTimer = setInterval(this.birdMoveDown, 16.66);
      this.setState({ birdTimer: birdTimer });
    }

    if (e.key === " ") {
      let birdFalling = false;
      this.setState({ birdFalling: birdFalling });
    }
  };

  birdMoveDown = () => {
    if (this.state.birdFalling === true) {
      let birdPos = this.state.birdPos + this.state.birdFall;
      let birdRotate = 20;
      this.setState({ birdPos: birdPos, birdRotate: birdRotate });
    } else {
      clearInterval(this.state.birdTimer);
      let birdTimer = setInterval(this.birdMoveUp, 16.66);
      this.setState({ birdTimer: birdTimer });
    }
  };

  birdMoveUp = () => {
    let birdPos = this.state.birdPos - 8;
    let cnt = this.state.cnt + 1;
    let birdRotate = -20;
    this.setState({ birdPos: birdPos, cnt: cnt, birdRotate: birdRotate });
    if (cnt === 8) {
      clearInterval(this.state.birdTimer);
      let birdTimer = setInterval(this.birdMoveDown, 16.66);
      let birdFalling = true;
      cnt = 0;
      this.setState({
        birdTimer: birdTimer,
        birdFalling: birdFalling,
        cnt: cnt,
      });
    }
  };

  collide = () => {
    //Dying Part
    if (this.state.birdPos > 600) {
      clearInterval(this.state.gameTimer);
      clearInterval(this.state.birdTimer);
    }

    //Game Over by 1st Upper Pipe
    if (
      this.state.pipepos1 - 50 < 54 &&
      this.state.pipepos1 + 52 > 58 &&
      this.state.birdPos < this.state.randomLength1 - 20
    ) {
      clearInterval(this.state.gameTimer);
      clearInterval(this.state.birdTimer);
    }

    //Game Over by 1st Lower Pipe
    if (
      this.state.pipepos1 - 50 < 54 &&
      this.state.pipepos1 + 52 > 70 &&
      this.state.birdPos >
        2 * this.state.randomLength1 + 116 - this.state.randomLength1 - 47
    ) {
      clearInterval(this.state.gameTimer);
      clearInterval(this.state.birdTimer);
    }

    //Game over by 2nd Upper Pipe
    if (
      this.state.pipepos2 - 50 < 54 &&
      this.state.pipepos2 + 52 > 58 &&
      this.state.birdPos < this.state.randomLength2 - 20
    ) {
      clearInterval(this.state.gameTimer);
      clearInterval(this.state.birdTimer);
    }

    //Game over by 2nd Lower Pipe
    if (
      this.state.pipepos2 - 50 < 54 &&
      this.state.pipepos2 + 52 > 70 &&
      this.state.birdPos >
        2 * this.state.randomLength2 + 116 - this.state.randomLength2 - 47
    ) {
      clearInterval(this.state.gameTimer);
      clearInterval(this.state.birdTimer);
    }
  };

  getScore = () => {
    if (this.state.pipepos1 === 10 || this.state.pipepos2 === 10) {
      let score = this.state.score + 1;
      this.setState({ score: score });
    }
  };

  increaseGameSpeed = () => {
    let score = this.state.score;
    if (score % 5 === 0) {
      let speed = this.state.speed + 0.05;
      this.setState({ speed: speed });
    }
  };

  useEffect = () => {
    let pipepos1 = this.state.pipepos1 - this.state.speed;
    let pipepos2 = this.state.pipepos2 - this.state.speed;
    this.setState({ pipepos1: pipepos1, pipepos2: pipepos2 });

    if (pipepos1 < -52) {
      pipepos1 = 548;
      let randomLength1 = Math.floor(Math.random() * (450 - 50 + 1) + 50);
      this.setState({ pipepos1: pipepos1, randomLength1: randomLength1 });
    }

    if (pipepos2 < -52) {
      pipepos2 = 548;
      let randomLength2 = Math.floor(Math.random() * (450 - 50 + 1) + 50);
      this.setState({ pipepos2: pipepos2, randomLength2: randomLength2 });
    }
    // console.log(this.state.pipepos1);

    this.collide();

    this.getScore();

    // this.render();
  };

  restart = () => {
    window.location.reload();
  };

  render() {
    // console.log(this.state.randomLength1);
    return (
      <React.Fragment>
        <div id="mainGame" tabIndex="0" onKeyDown={this.btnPressed}>
          <Bird
            birdPos={this.state.birdPos}
            birdRotate={this.state.birdRotate}
          />
          <Ground />
          <PipePair
            upperPipeLength={this.state.randomLength1}
            pos={this.state.pipepos1}
          />
          <PipePair
            upperPipeLength={this.state.randomLength2}
            pos={this.state.pipepos2}
          />

          <span className="btnHoldingSpan m-2">
            <button
              className="btn btn-info m-2 myBtn"
              style={{ width: 280, marginLeft: 4 }}
              onClick={this.restart}
            >
              Restart
            </button>

            <button className="btn btn-success m-2" style={{ width: 280 }}>
              Score: {this.state.score}
            </button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
