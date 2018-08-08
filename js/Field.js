import { random, shuffle } from 'lodash';
import Snake from './Snake';
import Frog from './Frog';
import Menu from './Menu';

export default class Field {
    constructor() {
        this.menu = new Menu();
        this.field = this.createField();
        this.snake = new Snake();
        this.frog = new Frog();
        this.game = [];
        this.snakeInterval = 100;
        this.frogInterval = 1000;
        this.fillField();
        this.putSnakeOnField();
        this.putFrogOnField(this.getEmptyFieldBlockIndex());
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
        if (this.field.children[this.snake.head].classList.contains('frog')) {
            this.menu.score++;
            this.menu.changeScore();
            this.field.children[this.snake.head].classList.remove('frog');
            this.putFrogOnField(this.getEmptyFieldBlockIndex());
            this.snake.increaseSnake();
        }
        this.field.children[this.snake.tail].classList.add('snake-tail');
        console.log('length outside', this.snake.body)
        for (var i = 0; i < this.snake.body.length; i++) {
            this.field.children[this.snake.body[i]].classList.add('snake-body');
        }
        this.field.children[this.snake.head].classList.add('snake-head');
    }

    putFrogOnField(pos) {
        this.frog.position = pos;
        this.field.children[this.frog.position].classList.add('frog');
        console.log(this.frog.position)
    }

    getEmptyFieldBlockIndex() {
        const blockIndex = random(this.field.children.length - 1, false);
        const block = this.field.children[blockIndex];
        return this.isEmptyBlock(block) ? this.getEmptyFieldBlockIndex() : blockIndex;
    }

    getEmptyNearbyFieldBlockIndex() {
        const shuffled = shuffle([1, -1, 18, -18]);
        var block;
        var index;
        for (let i = 0; i < shuffled.length; i++) {
            index = this.frog.position + shuffled[i];
            block = this.field[index]
            console.log(block)
            if (this.isEmptyBlock.bind(this, block) && index >= 0 && index < this.field.children.length) {
                console.log('empty', this.frog.position + shuffled[i])
                return index;
            }
        }
        console.log('not empty')
        return -1;
    }

    isEmptyBlock(block) {
        return
        !(block.classList.contains('snake-body') ||
            block.classList.contains('snake-head') ||
            block.classList.contains('snake-tail'))
    }

    moveSnake() {
        try {
            this.clearBlocksWithSnake();
            switch (this.snake.direction) {
                case 'ArrowRight': {
                    if ((this.snake.head + 1) % 18 === 0) {
                        throw Error;
                    }
                    this.snake.moveRight();
                    break;
                }
                case 'ArrowLeft': {
                    if (this.snake.head % 18 === 0) {
                        throw Error;
                    }
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
        } catch (e) {
            this.stopGame();
        }
    }

    startGame() {
        this.game.push(setInterval(this.moveSnake.bind(this), this.snakeInterval));
        this.game.push(setInterval(this.moveFrog.bind(this), this.frogInterval));
    }

    stopGame() {
        this.game.forEach(interval => {
            clearInterval(interval);
        });
        alert(`GAME OVER \nScore: ${this.menu.score}`);
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

    moveFrog() {
        this.field.children[this.frog.position].classList.remove('frog');
        const index = this.getEmptyNearbyFieldBlockIndex();
        console.log(this.frog.position, this.field.children[index], index)
        this.frog.position = index >= 0 ? index : this.frog.position;
        console.log(this.frog.position)
        this.field.children[this.frog.position].classList.add('frog');
    }

    changeSnakeMovingirection(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown')
            this.snake.direction = e.key;
    }
}