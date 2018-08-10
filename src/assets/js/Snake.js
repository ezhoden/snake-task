export default class Snake {
    constructor() {
        this.head = 1;
        this.body = [];
        this.tail = 0;
        this.direction = 'ArrowRight';
    }
    
    resetState() {
        this.head = 1;
        this.body = [];
        this.tail = 0;
        this.direction = 'ArrowRight';
    }
}