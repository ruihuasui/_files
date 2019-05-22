import React from 'react';
import {matrixAt} from './matrix.js';

function Square(props) { // active or not 
    const name=(props.value) ? "active-square" : "square";
    function color(value) { 
      switch (value) {
        case 2 : return {background: '#eee4da'};
        case 4 : return {background: '#ede0c8'};
        case 8 : return {background: '#f2b179'};
        case 16 : return {background: '#f59563', color: 'white'};
        case 32 : return {background: '#f67c5f', color: 'white'};
        case 64 : return {background: '#f65e3b', color: 'white'};
        case 128 : return {background: '#edcf72', color: 'white'};
        case 256 : return {background: '#edcc61', color: 'white'};
        case 512 : return {background: '#edc850', color: 'white'};
        case 1024 : return {background: '#edc53f', color: 'white'};
        case 2048 : return {background: '#edc22e', color: 'white'};
        case 4096 : return {background: '#edc850', color: 'white'};
      }
    }
    return (
      <div className={name} style={color(props.value)}>
        <div style={{marginTop: '30px'}}>
          {(props.value) ? props.value : null}
        </div>
      </div>
    );
  }
  
  class ScoreBoard extends React.Component {
    render() {
      return (
        <div className="score-board">
          {(this.props.canMove) ? 'SCORE:' + this.props.score : 'Cannot Move!'}
        </div>
      );
    }
  }
  
  export default class Board2048 extends React.Component {
    renderSquare(i) {
      return (
        <Square value={matrixAt(this.props.matrix, i)}/>
      );
    }
  
    render() {
      return (
        <div id="board">
          <div id="header">2 0 4 8</div>
          {this.props.restartButton}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
          <ScoreBoard 
            score={this.props.score} 
            full={this.props.full} 
            canMove={this.props.canMove}
          />
        </div>
      )
    }
  }