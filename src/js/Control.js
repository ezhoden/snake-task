export default class Control {
    constructor(snake) {
        this.snake = snake;
    }

    changeSnakeDirection(e) {
        switch (e.key) {
            case 'ArrowRight':
                if (this.snake.direction === this.snake.directions.up || this.snake.direction === this.snake.directions.down) {
                    this.snake.changeDirectionToRight();
                }
                break;
            case 'ArrowLeft':
                if (this.snake.direction === this.snake.directions.up || this.snake.direction === this.snake.directions.down) {
                    this.snake.changeDirectionToLeft();
                }
                break;
            case 'ArrowUp':
                if (this.snake.direction === this.snake.directions.left || this.snake.direction === this.snake.directions.right) {
                    this.snake.changeDirectionToUp();
                }
                break;
            case 'ArrowDown':
                if (this.snake.direction === this.snake.directions.left || this.snake.direction === this.snake.directions.right) {
                    this.snake.changeDirectionToDown();
                }
                break;
        }
    }

    startWatch() {
        document.addEventListener('keydown', this.changeSnakeDirection.bind(this));
    }
}