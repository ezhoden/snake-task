export default class Control {
    constructor(snake) {
        this.snake = snake;
        document.addEventListener('keydown', this.changeSnakeDirection.bind(this));
    }

    changeSnakeDirection(e) {
        switch (this.snake.direction) {
            case 'ArrowRight':
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    this.snake.direction = e.key;
                }
                break;
            case 'ArrowLeft':
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    this.snake.direction = e.key;
                }
                break;
            case 'ArrowUp':
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    this.snake.direction = e.key;
                }
                break;
            case 'ArrowDown':
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    this.snake.direction = e.key;
                }
                break;
        }
    }
}