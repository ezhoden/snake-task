export default class GameGuard {
    constructor(config, snake, frog) {
        this.config = config;
        this.snake = snake;
        this.frog = frog;
    }

    isValidSnakeDirection() {
        switch (this.snake.direction) {
            case this.snake.directions.right:
                return !((this.snake.head + 1) % Math.sqrt(this.config.fieldSize) === 0 || this.willSnakeEatItself(this.snake.head + 1));
            case this.snake.directions.left:
                return !(this.snake.head % Math.sqrt(this.config.fieldSize) === 0 || this.willSnakeEatItself(this.snake.head - 1));
            case this.snake.directions.up:
                return !(this.snake.head - Math.sqrt(this.config.fieldSize) < 0 || this.willSnakeEatItself(this.snake.head -18));
            case this.snake.directions.down:
                return !(this.snake.head + Math.sqrt(this.config.fieldSize) >= this.config.fieldSize || this.willSnakeEatItself(this.snake.head + 18));
        }
    }

    isBlockWithoutSnake(blockIndex) {
        return !([this.snake.tail, this.snake.body, this.snake.head].includes(blockIndex));
    }

    isSnakeEatFrog() {
        return this.snake.head === this.frog.position;
    }

    willSnakeEatItself(nextHeadIndex) {
        return this.snake.body.includes(nextHeadIndex);
    }
}