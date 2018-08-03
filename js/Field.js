import { random } from 'lodash';

export default class Field {
    constructor() {
        this.field = this.createField();
        this.fillField();
        this.putSnakeOnField();
        this.putFrogOnField();
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
        const fieldBlockForSnakeTail = this.field.children[0];
        const snakeTail = document.createElement('div');

        snakeTail.classList.add('snake-tail');
        fieldBlockForSnakeTail.appendChild(snakeTail);

        const fieldBlockForSnakeHead = this.field.children[1];
        const snakeHead = document.createElement('div');

        snakeHead.classList.add('snake-head');
        fieldBlockForSnakeHead.appendChild(snakeHead);
    }

    putFrogOnField() {
        const fieldBlockForFrog = this.getEmptyFieldBlock();
        const frog = document.createElement('div');
        frog.classList.add('frog');
        fieldBlockForFrog.appendChild(frog);
    }

    removeCurrentFrog(index) {
        this.field.children[index].innerHTML = '';
    }

    getEmptyFieldBlock() {
        const block = this.field.children[random(this.field.children.length - 1, false)]
        return block.innerHTML === '' ? block : this.getEmptyFieldBlock();
    }
}