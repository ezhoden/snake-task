import SnakeHead from "./SnakeHead";
import SnakeBody from "./SnakeBody";
import SnakeTail from "./SnakeTail";

export default class Snake {
    constructor() {
        this.head = 1;
        this.body = [];
        this.tail = 0;
        this.previousTail = 0;
        this.direction = 'ArrowRight';
    }

    moveRight() {
        if (this.body.length === 0) {
            this.tail = this.head;
        }
        this.head++;
    }

    moveLeft() {
        if (this.body.length === 0) {
            this.tail = this.head;
        }
        this.head--;
    }

    moveUp() {
        if (this.body.length === 0) {
            this.tail = this.head;
        }
        this.head -= 18;
    }

    moveDown() {
        if (this.body.length === 0) {
            this.tail = this.head;
        }
        this.head += 18;
    }

    increaseSnake() {
        this.body.push(this.tail);
        this.tail = this.previousTail;
    }
}