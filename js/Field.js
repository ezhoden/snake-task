import { random } from 'lodash';
import Snake from './Snake';
import Frog from './Frog';
import Menu from './Menu';

export default class Field {
    constructor() {
        this.menu = new Menu();
        this.field = this.createField();
        this.snake = new Snake();
        this.frog = new Frog();
        this.game;
        this.snakeInterval = 100;
        this.fillField();
        this.putSnakeOnField();
        this.putFrogOnField();
        this.setControlButtons();
        document.addEventListener('keydown', this.changeSnakeMovingirection.bind(this));
    }

    createField() {
        const field = document.createElement('div');
        field.classList.add('field');
        document.querySelectorAll('body')[0].appendChild(field);
        return field;
    }

    fillField() {
        var fieldBlock;
        for (var i = 0; i < 324; i++) {
            fieldBlock = document.createElement('div');
            fieldBlock.classList.add('field__block');
            this.field.appendChild(fieldBlock);
        }
    }

    putSnakeOnField() {
        if(this.field.children[this.snake.head].classList.contains('frog')) {
            this.menu.score++;
            this.menu.changeScore();
            this.field.children[this.snake.head].classList.remove('frog');
            this.putFrogOnField();
            this.snake.increaseSnake();
        }
        this.field.children[this.snake.tail].classList.add('snake-tail');
        console.log('length outside', this.snake.body)
        for (var i = 0; i < this.snake.body.length; i++) {
            this.field.children[this.snake.body[i]].classList.add('snake-body');
        }
        this.field.children[this.snake.head].classList.add('snake-head');
    }

    putFrogOnField() {
        this.getEmptyFieldBlock().classList.add('frog');
    }

    getEmptyFieldBlock() {
        const block = this.field.children[random(this.field.children.length - 1, false)]
        return block.classList.length === 1 ? block : this.getEmptyFieldBlock();
    }

    moveSnake() {
        this.clearBlocksWithSnake();
        switch(this.snake.direction) {
            case 'ArrowRight': {
                this.snake.moveRight();
                break;
            }
            case 'ArrowLeft': {
                this.snake.moveLeft();
                break;
            }
            case 'ArrowUp': {
                this.snake.moveUp();
                break;
            }
            case 'ArrowDown': {
                this.snake.moveDown();
                break;
            }
        }
        this.putSnakeOnField();
    }

    startGame() {
        this.game = setInterval(this.moveSnake.bind(this), this.snakeInterval);
    }

    stopGame() {
       clearInterval(this.game);
    }

    setControlButtons() {
        this.menu.startGameButton.addEventListener('click', this.startGame.bind(this));
        this.menu.stopGameButton.addEventListener('click', this.stopGame.bind(this));
    }

    clearBlocksWithSnake() {
        this.field.children[this.snake.tail].classList.remove('snake-tail');
        for (var i = 0; i < this.snake.body.length; i++) {
            this.field.children[this.snake.body[i]].classList.remove('snake-body');
        }
        this.field.children[this.snake.head].classList.remove('snake-head');
    }

    changeSnakeMovingirection(e) {
        if(e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown')
        this.snake.direction = e.key;
    }
}