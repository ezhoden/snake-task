import { random } from 'lodash';

export default class MoveFrog {
    constructor(fieldSize, gameGuard, frog) {
        this.fieldSize = fieldSize;
        this.gameGuard = gameGuard;
        this.frog = frog;
    }

    move() {
        this.frog.position = this.getRandomindex();
    }

    getRandomindex() {
        const randomIndex = random(this.fieldSize - 1, false);
        return this.gameGuard.isBlockWithoutSnake(randomIndex) ? randomIndex : this.getRandomindex();
    }
}