'use strict';

import { getTwoRandomCells } from './utils.js';
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
    this.startBtn = document.querySelector('.start');
    this.cells = document.querySelectorAll('.field-cell');
    this.win = false;
    this.board = new Board();

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
      if (this.firstClick) {
        const [idx1, idx2] = getTwoRandomCells();
        console.log('start');

        this.cells.forEach((cell, i) => {
          if (i === idx1 || i === idx2) {
            const val = Math.random() > 0.1 ? 2 : 4;

            cell.textContent = val;
            cell.className = 'field-cell'; // спершу скидаємо клас
            cell.classList.add(`field-cell--${val}`);
          } else {
            cell.className = 'field-cell';
          }
        });

        console.log(this.cells);
        this.board.move();
        this.firstClick = false;

        while (this.win === false) {
          this.board.move();
        }
      } else {
        this.restart();
      }
    });
  }

  /**
   * Resets the game.
   */
  restart() {
    this.cells.forEach((cell) => {
      cell.textContent = '';
      cell.className = 'field-cell';
    });

    this.firstClick = true;
  }

  // Add your own methods here

  // опрацьов
}

module.exports = Game;
