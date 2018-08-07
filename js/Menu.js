

export default class Menu {
    constructor() {
        this.startGameButton = this.createStartGameButton();
        this.stopGameButton = this.createStopGameButton();
        this.score = 0;
        this.scoreBoard = this.createScore();
        this.menu = this.createMenu();
    }

    createMenu() {
        const menu = document.createElement('div');
        menu.appendChild(this.startGameButton);
        menu.appendChild(this.stopGameButton);
        menu.appendChild(this.scoreBoard)
        document.querySelectorAll('body')[0].appendChild(menu);
        return menu;
    }

    createStartGameButton() {
        const startGameButton = document.createElement('button');
        startGameButton.classList.add('menu__button');
        startGameButton.textContent = 'Start';
        return startGameButton;
    }

    createStopGameButton() {
        const stopGameButton = document.createElement('button');
        stopGameButton.classList.add('menu__button');
        stopGameButton.textContent = 'Stop';
        return stopGameButton;
    }

    createScore() {
        const scoreBoard = document.createElement('div');
        scoreBoard.classList.add('score-board');
        scoreBoard.textContent = `Score: ${this.score}`;
        return scoreBoard;
    }

    changeScore() {
        this.scoreBoard.textContent = `Score: ${this.score}`;
    }
}