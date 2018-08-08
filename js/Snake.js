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
        this.moveTail();
        this.moveBody();
        this.head++;
    }

    moveLeft() {
        this.moveTail();
        this.moveBody();
        this.head--;
    }

    moveUp() {
        this.moveTail();
        this.moveBody();
        this.head -= 18;
    }

    moveDown() {
        this.moveTail();
        this.moveBody();
        this.head += 18;
    }

    moveTail() {
        this.previousTail = this.tail;
        if (this.body.length === 0) {
            this.tail = this.head;
        } else {
            this.tail = this.body[this.body.length - 1];
        }
    }

    moveBody() {
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i] = this.body[i - 1];
        }
        if (this.body.length > 0) {
            this.body[0] = this.head;
        }
    }

    increaseSnake() {
        this.body.push(this.tail);
    }
}