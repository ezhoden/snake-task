import { random } from 'lodash';

export default class MoveFrog {
    constructor(config, gameGuard, frog) {
        this.config = config;
        this.gameGuard = gameGuard;
        this.frog = frog;
    }
    
    move() {
        this.frog.position = this.getValidPosition();
    }

    getValidPosition() {
        const randomIndex = random(this.config.fieldSize - 1, false);
        return this.gameGuard.isBlockWithoutSnake(randomIndex) ? randomIndex : this.getValidPosition();
    }
}