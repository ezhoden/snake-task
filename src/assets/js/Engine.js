export default class Engine {
    constructor() {
        this.field = Array.from(document.getElementsByClassName('field__block'));
    }

    clearField() {
        this.field.forEach(fieldBlock => {
            fieldBlock.classList = ['field__block'];
        });
    }

    renderField(snake, frog) {
        this.renderSnake(snake);
        this.renderFrog(frog);
    }

    renderSnake(snake) {
        this.field[snake.tail].classList.add('snake-tail');
        for (var i = 0; i < snake.body.length; i++) {
            this.field[snake.body[i]].classList.add('snake-body');
        }
        this.field[snake.head].classList.add('snake-head');
    }

    renderFrog(frog) {
        this.field[frog.position].classList.add('frog');
    }

    updateField(snake, frog) {
        this.clearField();
        this.renderField(snake, frog);
    }

    gameOverAlert(score) {
        alert(`GAME OVER\nScore: ${score}`)
    }
}