import Menu from "./Menu";
import Score from "./Score";
import Engine from "./Engine";

export default class Game {
    constructor(config, gameGuard, control, moveSnake, moveFrog) {
        this.menu = new Menu();
        this.score = new Score();
        this.engine = new Engine;
        this.gameGuard = gameGuard;
        this.config = config;
        this.control = control;
        this.moveSnake = moveSnake;
        this.moveFrog = moveFrog;
        this.gameIntervals = [];
    }

    initNewGame() {
        this.engine.renderField(this.score, this.moveSnake.snake, this.moveFrog.frog);
        this.setMenuButtonsFunc();
    }

    startGame() {
        this.gameIntervals.push(setInterval(this.makeMoveSnake.bind(this), this.config.snakeInterval));
        this.gameIntervals.push(setInterval(this.moveFrog.move.bind(this.moveFrog), this.config.frogInterval));
        this.gameIntervals.push(setInterval(this.engine.updateField.bind(this.engine, this.score, this.moveSnake.snake, this.moveFrog.frog), this.config.snakeInterval));
    }

    stopGame() {
        this.gameIntervals.forEach(interval => {
            clearInterval(interval);
        });
        this.gameIntervals = [];
        this.engine.gameOverAlert(this.menu.score.innerText);
        this.resetGame();
    }

    setMenuButtonsFunc() {
        this.menu.addClickListenerToButton(this.menu.startButton, this.startGame.bind(this));
        this.menu.addClickListenerToButton(this.menu.stopButton, this.stopGame.bind(this));
    }

    makeMoveSnake() {
        try {
            this.moveSnake.move();
        } catch(e) {
            this.menu.stopButton.dispatchEvent(this.emulatedClick());
        }
        if (this.gameGuard.isSnakeEatFrog()) {
            this.score.increaseScore();
            this.moveSnake.increaseSnake();
            this.moveFrog.move();
            clearInterval(this.gameIntervals[1]);
            this.gameIntervals[1] = setInterval(this.moveFrog.move.bind(this.moveFrog), this.config.frogInterval);
        }
    }

    emulatedClick() {
        return new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });
    }
    
    resetGame() {
        this.moveSnake.snake.resetState();
        this.moveFrog.move();
        this.score.resetScore();
        this.engine.updateField(this.score, this.moveSnake.snake, this.moveFrog.frog);
    }
}