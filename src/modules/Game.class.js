'use strict';

import { getTwoRandom, renderField } from './utils.js';
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
    this.cells = this.board.cells;

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
      const [rand1Row, rand1Col] = getTwoRandom();
      const [rand2Row, rand2Col] = getTwoRandom();

      for (let i = 0; i < this.state.length; i++) {
        for (let j = 0; j < this.state[i].length; j++) {
          if (rand1Row === i && rand1Col === j) {
            this.state[i][j] = Math.round(Math.random() > 0.1 ? 2 : 4);
          }

          if (rand2Row === i && rand2Col === j) {
            this.state[i][j] = Math.round(Math.random() > 0.1 ? 2 : 4);
          }
        }
      }
      renderField(this.state, this.cells);
      this.board.move(this.state);

      console.log(this.state);
    });
  }

  /**
   * Resets the game.
   */
  restart() {}
}
module.exports = Game;
