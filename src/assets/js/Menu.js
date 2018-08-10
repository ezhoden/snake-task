export default class Menu {
    constructor() {
        this.startButton = document.getElementById('start-button');
        this.stopButton = document.getElementById('stop-button');
        this.score = document.getElementById('score');
        this.startButton.addEventListener('click', this.enableStopButton.bind(this));
        this.stopButton.addEventListener('click', this.enableStartButton.bind(this));
    }

    addClickListenerToButton(button, func) {
        button.addEventListener('click', func);
    }

    increaseScore() {
        this.score.innerText++;
    }

    resetScore() {
        this.score.innerText = 0;
    }

    enableStartButton() {
        this.startButton.classList.replace('menu__button_disabled', 'menu__button_enabled');
        this.startButton.disabled = false;
        this.disableStopButton();
    }

    enableStopButton() {
        this.stopButton.classList.replace('menu__button_disabled', 'menu__button_enabled');
        this.stopButton.disabled = false;
        this.disableStartButton();
    }

    disableStartButton() {
        this.startButton.classList.replace('menu__button_enabled', 'menu__button_disabled');
        this.startButton.disabled = true;
    }

    disableStopButton() {
        this.stopButton.classList.replace('menu__button_enabled', 'menu__button_disabled');
        this.stopButton.disabled = true;
    }
}