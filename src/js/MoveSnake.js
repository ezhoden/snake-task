export default class MoveSnake {
    constructor(config, gameGuard, snake) {
        this.config = config;
        this.gameGuard = gameGuard;
        this.snake = snake;
    }

    move() {
        this.moveTail();
        this.moveBody();
        this.snake.head = this.getNewHeadPosition();
    }

    getNewHeadPosition() {
        if (this.gameGuard.isValidSnakeDirection()) {
            switch (this.snake.direction) {
                case this.snake.directions.right: {
                    return this.snake.head + 1;
                }
                case this.snake.directions.left: {
                    return this.snake.head - 1;
                }
                case this.snake.directions.up: {
                    return this.snake.head - Math.sqrt(this.config.fieldSize);
                }
                case this.snake.directions.down: {
                    return this.snake.head + Math.sqrt(this.config.fieldSize);
                }
            }
        } else {
            throw Error;
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