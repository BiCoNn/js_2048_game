export class Board {
  constructor(size = 4) {
    this.size = size;
    this.cells = this.createEmptyBoard();
  }

  createEmptyBoard() {}
  moveLeft() {
    console.log('Натиснуто стрілку вліво');
  }

  moveRight() {
    // Логіка вправо
  }
  moveTop() {}
  moveBotom() {}

  move() {
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'ArrowLeft') {
          this.moveLeft();
          this.move();
        }

        if (e.key === 'ArrowRight') {
          console.log('Натиснуто стрілку вправо');
        }

        if (e.key === 'ArrowUp') {
          console.log('Натиснуто стрілку вгору');
        }

        if (e.key === 'ArrowDown') {
          console.log('Натиснуто стрілку вниз');
        }
      },
      { once: true },
    );
  }
}
