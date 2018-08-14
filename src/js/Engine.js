export default class Engine {
    constructor() {
        this.field = Array.from(document.getElementsByClassName('field__block'));
    }

    clearField() {
        this.field.forEach(fieldBlock => {
            fieldBlock.classList = ['field__block'];
        });
    }

    renderField(score, snake, frog) {
        this.renderSnake(snake);
        this.renderFrog(frog);
        this.renderScore(score.score);
    }

    renderSnake(snake) {
        this.renderSnakeTail(snake);
        this.renderSnakeBody(snake);
        this.renderSnakeHead(snake);
    }

    renderSnakeTail(snake) {
        this.field[snake.tail].classList.add('snake');
        const fieldSqrt = Math.sqrt(this.field.length);
        let partBeforeTail;
        if (snake.body.length === 0) {
            partBeforeTail = snake.head;
        } else {
            partBeforeTail = snake.body[snake.body.length - 1];
        }
        const differenceBetweenTailAndPreviousPartOfSnake = snake.tail - partBeforeTail;
        switch (differenceBetweenTailAndPreviousPartOfSnake) {
            case 1:
                this.field[snake.tail].classList.add('snake-tail_left');
                break;
            case -1:
                this.field[snake.tail].classList.add('snake-tail_right');
                break;
            case fieldSqrt:
                this.field[snake.tail].classList.add('snake-tail_up');
                break;
            case -fieldSqrt:
                this.field[snake.tail].classList.add('snake-tail_down');
                break;
        }
    }

    renderSnakeBody(snake) {
        const arr = Array.from(snake.body);
        arr.unshift(snake.head);
        arr.push(snake.tail);
        const fieldSqrt = Math.sqrt(this.field.length);
        for (var i = 1; i < arr.length - 1; i++) {
            this.field[snake.body[i - 1]].classList.add('snake');
            const prev = arr[i - 1];
            const curr = arr[i];
            const next = arr[i + 1];
            const diff = prev - next;
            const prevAndCurrDiff = prev - curr;
            switch (diff) {
                case prevAndCurrDiff === -1 && fieldSqrt - 1 || prevAndCurrDiff === -fieldSqrt && -(fieldSqrt - 1):
                    this.field[snake.body[i - 1]].classList.add('snake-body_left-up');
                    break;
                case prevAndCurrDiff === -1 && -(fieldSqrt + 1) || prevAndCurrDiff === fieldSqrt && fieldSqrt + 1:
                    this.field[snake.body[i - 1]].classList.add('snake-body_left-down');
                    break;
                case prevAndCurrDiff === 1 &&  fieldSqrt + 1 || prevAndCurrDiff === -fieldSqrt && -(fieldSqrt + 1):
                    this.field[snake.body[i - 1]].classList.add('snake-body_right-up');
                    break;
                case prevAndCurrDiff === fieldSqrt && fieldSqrt - 1 || prevAndCurrDiff === 1 && -(fieldSqrt - 1):
                    this.field[snake.body[i - 1]].classList.add('snake-body_right-down');
                    break;
                case 2: 
                case -2:
                    this.field[snake.body[i - 1]].classList.add('snake-body_horizontal');
                    break;
                case -2 * fieldSqrt:
                case 2 * fieldSqrt:
                    this.field[snake.body[i - 1]].classList.add('snake-body_vertical');
                    break;
                default:
                    break;
            }
        }
    }

    renderSnakeHead(snake) {
        this.field[snake.head].classList.add('snake');
        switch (snake.direction) {
            case snake.directions.right:
                this.field[snake.head].classList.add('snake-head_right');
                break;
            case snake.directions.left:
                this.field[snake.head].classList.add('snake-head_left');
                break;
            case snake.directions.up:
                this.field[snake.head].classList.add('snake-head_up');
                break;
            case snake.directions.down:
                this.field[snake.head].classList.add('snake-head_down');
                break;
        }
    }

    renderFrog(frog) {
        this.field[frog.position].classList.add('frog');
    }

    renderScore(score) {
        document.getElementById('score').innerText = score;
    }

    updateField(score, snake, frog) {
        this.clearField();
        this.renderField(score, snake, frog);
    }

    gameOverAlert(score) {
        alert(`GAME OVER\nScore: ${score}`)
    }
}