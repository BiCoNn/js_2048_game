'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */

  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    this.state = initialState;
    this.state1D = this.state.flat();
    this.startBtn = document.querySelector('.start');
    this.cells = document.querySelectorAll('.field-cell');

    this.firstClick = true;
    this.start();
  }

  moveLeft() {
    document.addEventListener('keydown', () => {
      if()
    })
  }
  moveRight() {}
  moveUp() {}
  moveDown() {}

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
        const [idx1, idx2] = this.getTwoRandomCells();

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

        this.firstClick = false;
      } else {
        this.restart();
      }
    });
  }

  /**
   * Resets the game.
   */
  restart() {
    this.state1D = this.state.flat();

    this.cells.forEach((cell) => {
      cell.textContent = '';
      cell.className = 'field-cell';
    });

    this.firstClick = true;
  }

  // Add your own methods here
  getTwoRandomCells() {
    const idx1 = Math.floor(Math.random() * this.state1D.length);
    let idx2;

    do {
      idx2 = Math.floor(Math.random() * this.state1D.length);
    } while (idx2 === idx1);

    return [idx1, idx2];
  }

  move() {
    document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    
  }

  if (event.key === 'ArrowRight') {
    console.log('Натиснуто стрілку вправо');
  }

  if (event.key === 'ArrowUp') {
    console.log('Натиснуто стрілку вгору');
  }

  if (event.key === 'ArrowDown') {
    console.log('Натиснуто стрілку вниз');
  }
});
  }
}

module.exports = Game;
