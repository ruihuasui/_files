import React from 'react';
import ReactDOM from 'react-dom';
import Board2048 from './board.js';
import {
  matrixAt, 
  setMatrix, 
  getRandomNum, 
  move, 
  isFull
} from './matrix.js';
import './index.css';

var map = {
  38: 0, // Up
  39: 1, // Right
  40: 2, // Down
  37: 3, // Left
};

var start = true;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix  : Array(16).fill(0),
      score   : 0,
      canMove : true,
      full    : false,
    };
  }

  handleChange(event) {
    const action = map[event.which];
    const matrix_ = this.state.matrix.slice();
    var score_ = this.state.score;
    const result = move(matrix_, action, score_);
    this.setState({
      canMove : result.canMove, 
      matrix  : result.matrix_, 
      score   : result.score_,
      full    : result.full,
    });
  }

  restart = () => {
    this.setState({
      matrix  : Array(16).fill(0),
      score   : 0,
      canMove : true,
      full    : false,
    }); 
    start = true;
  }

  render() {
    // check whether the matrix is full
    if (!this.state.full && this.state.canMove) {
      // generate number from 0-15
      var res1 = getRandomNum(this.state.matrix, 16, null);
      setMatrix(this.state.matrix, res1.num, res1.index);
      if (start) {
        start = false;
        var res2 = getRandomNum(this.state.matrix, 16, res1.index);
        setMatrix(this.state.matrix, res2.num, res2.index);
      }
    } 
    
    return (
      <div onKeyDown={(e) => this.handleChange(e)} tabIndex="1">
        <Board2048 
          matrix={this.state.matrix} 
          onKeyDown={() => this.handleChange}
          score={this.state.score} 
          full={this.state.full} 
          canMove={this.state.canMove}
          restartButton={
            <button 
              className="restart-button"
              onClick={this.restart}
            > 
              New Game
            </button>
          }
        />
      </div>
    );
  };
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

