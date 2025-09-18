import { insertRandomNums, shiftAndMurgeNums, renderField } from './utils.js';

export class Board {
  startBtn = document.querySelector('.button');
  cells = document.querySelectorAll('.field-cell');
  size = 4;
  move(arr) {
    window.document.addEventListener(
      'keydown',
      (e) => {
        const state = arr;

        switch (e.key) {
          case 'ArrowLeft':
            this.moveLeft(state, e.key, this.cells);
            break;
          case 'ArrowRight':
            this.moveRight(state, e.key, this.cells);
            break;
          case 'ArrowDown':
            this.moveDown(state, e.key, this.cells);
            break;
          case 'ArrowUp':
            this.moveUp(state, e.key, this.cells);
            break;
          default:
            console.log(e.key);
        }
      },
      { once: true },
    );
  }
  moveRight(state, direction, _cells) {
    let _state = state;

    _state = shiftAndMurgeNums(_state, direction);
    _state = insertRandomNums(_state);
    showArr(_state);
    renderField(_state, _cells);
    this.move(_state);
  }

  moveLeft(state, direction, _cells) {
    let _state = state;

    _state = shiftAndMurgeNums(_state, direction);
    _state = insertRandomNums(_state);
    showArr(_state);
    renderField(_state, _cells);
    this.move(_state);
  }
  moveUp(state, direction, _cells) {
    let _state = state;

    _state = shiftAndMurgeNums(_state, direction);
    _state = insertRandomNums(_state);
    showArr(_state);
    renderField(_state, _cells);
    this.move(_state);
  }
  moveDown(state, direction, _cells) {
    let _state = state;

    _state = shiftAndMurgeNums(_state, direction);
    _state = insertRandomNums(_state);
    showArr(_state);
    renderField(_state, _cells);
    this.move(_state);
  }
}

function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
  }
  console.log('-----------------------');
}
