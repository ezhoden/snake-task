

export default class Menu {
    constructor() {
        this.startGameButton = this.createStartGameButton();
        this.stopGameButton = this.createStopGameButton();
        this.menu = this.createMenu();
        this.score = 0;
    }

    createMenu() {
        const menu = document.createElement('div');
        menu.appendChild(this.startGameButton);
        menu.appendChild(this.stopGameButton);
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
}