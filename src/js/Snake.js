export default class Snake {
    resetState() {
        this.head = 1;
        this.body = [];
        this.tail = 0;
        this.direction = this.directions.right;
    }

    get directions() {
        return {
            right: 'right',
            left: 'left',
            up: 'up',
            down: 'down'
        }
    }

    changeDirectionToRight() {
        this.direction = this.directions.right;
    }

    changeDirectionToLeft() {
        this.direction = this.directions.left;
    }

    changeDirectionToUp() {
        this.direction = this.directions.up;
    }

    changeDirectionToDown() {
        this.direction = this.directions.down;
    }
}