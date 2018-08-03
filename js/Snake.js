import SnakeHead from "./SnakeHead";
import SnakeBody from "./SnakeBody";
import SnakeTail from "./SnakeTail";

export default class Snake {
    constructor() {
        this.head = new SnakeHead();
        this.body = [];
        this.tail = new SnakeTail();
    }

    increaseSnake() {
        this.body.push(new SnakeBody());
    }
}