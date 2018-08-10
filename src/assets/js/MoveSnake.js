export default class MoveSnake {
    constructor(fieldSize, gameGuard, snake) {
        this.fieldSize = fieldSize;
        this.gameGuard = gameGuard;
        this.snake = snake;
    }

    move() {
        this.moveTail();
        this.moveBody();
        this.snake.head = this.getNewHeadPosition();
    }

    getNewHeadPosition() {
        switch(this.snake.direction) {
            case 'ArrowRight': {
                return this.gameGuard.isValidSnakeDirection() ? this.snake.head + 1 : -1;
            }
            case 'ArrowLeft': {
                return this.gameGuard.isValidSnakeDirection() ? this.snake.head - 1 : -1;
            }
            case 'ArrowUp': {
                return this.gameGuard.isValidSnakeDirection() ? this.snake.head - Math.sqrt(this.fieldSize) : -1;
            }
            case 'ArrowDown': {
                return this.gameGuard.isValidSnakeDirection() ? this.snake.head + Math.sqrt(this.fieldSize) : -1;
            }
        }
    }

    moveTail() {
        if (this.snake.body.length === 0) {
            this.snake.tail = this.snake.head;
        } else {
            this.snake.tail = this.snake.body[this.snake.body.length - 1];
        }
    }

    moveBody() {
        for (var i = this.snake.body.length - 1; i > 0; i--) {
            this.snake.body[i] = this.snake.body[i - 1];
        }
        if (this.snake.body.length > 0) {
            this.snake.body[0] = this.snake.head;
        }
    }

    increaseSnake() {
        this.snake.body.push(this.snake.tail);
    }
}