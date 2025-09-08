export class Input {
  constructor(callback) {
    this.callback = callback;
    document.addEventListener('keydown', (e) => this.handleInput(e));
  }

  handleInput(e) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      this.callback(e.key); // передає дію у Game
    }
  }
}
