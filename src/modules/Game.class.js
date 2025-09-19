'use strict';

import { getTwoRandom, renderField, score } from './utils.js';
import { Board } from './Board.class.js';
/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    this.state = initialState;
    this.board = new Board(); // клас поле
    this.startBtn = this.board.startBtn; // кнопка старт/рестарт
    this.scoreInfo = this.board.counterInfo;
    this.cells = this.board.cells;
    this.score = score;

    this.firstClick = true;
    this.start();
  }

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {}

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {}

  /**
   * Starts the game.
   */
  start() {
    this.startBtn.addEventListener('click', () => {
      if (this.firstClick === false) {
        this.restart();
      }

      this.handleStart();
    });
  }

  handleStart() {
    this.startBtn.className = 'button restart';
    this.startBtn.textContent = 'Restart';

    const [rand1Row, rand1Col] = getTwoRandom();
    const [rand2Row, rand2Col] = getTwoRandom();

    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (rand1Row === i && rand1Col === j) {
          this.state[i][j] = Math.random() > 0.1 ? 2 : 4;
        }

        if (rand2Row === i && rand2Col === j) {
          this.state[i][j] = Math.random() > 0.1 ? 2 : 4;
        }
      }
    }

    renderField(this.state, this.cells);
    this.board.move(this.state);

    this.firstClick = false;
    console.log(this.state);
  }

  /**
   * Resets the game.
   */
  restart() {
    this.firstClick = true;
    scoreToNull(this.score, this.scoreInfo);

    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        this.state[i][j] = 0;
      }
    }

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].textContent = 0;
    }
    console.log(this.cells);
  }
}

export function scoreToNull(_score, field) {
  _score = 0;
  field.textContent = 0;
  score = 0;
}
module.exports = Game;
