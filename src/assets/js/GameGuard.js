export default class GameGuard {
    constructor(menu, fieldSize, snake, frog) {
        this.menu = menu;
        this.fieldSize = fieldSize;
        this.snake = snake;
        this.frog = frog;
    }

    isValidSnakeDirection() {
        switch (this.snake.direction) {
            case 'ArrowRight':
                return !((this.snake.head + 1) % Math.sqrt(this.fieldSize) === 0 || this.willSnakeEatItself(this.snake.head + 1));
            case 'ArrowLeft':
                return !(this.snake.head % Math.sqrt(this.fieldSize) === 0 || this.willSnakeEatItself(this.snake.head - 1));
            case 'ArrowUp':
                return !(this.snake.head - Math.sqrt(this.fieldSize) < 0 || this.willSnakeEatItself(this.snake.head -18));
            case 'ArrowDown':
                return !(this.snake.head + Math.sqrt(this.fieldSize) >= this.fieldSize || this.willSnakeEatItself(this.snake.head + 18));
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