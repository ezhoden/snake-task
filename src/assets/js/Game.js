export default class Game {
    constructor(menu, gameGuard, engine, snakeInterval, frogInterval, control, snakeMove, frogMove) {
        this.menu = menu;
        this.gameGuard = gameGuard;
        this.snakeInterval = snakeInterval;
        this.frogInterval = frogInterval;
        this.engine = engine;
        this.control = control;
        this.snakeMove = snakeMove;
        this.frogMove = frogMove;
        this.gameIntervals = [];
    }

    initNewGame() {
        this.engine.renderField(this.snakeMove.snake, this.frogMove.frog);
        this.setMenuButtonsFunc();
    }

    startGame() {
        this.gameIntervals.push(setInterval(this.makeSnakeMove.bind(this), this.snakeInterval));
        this.gameIntervals.push(setInterval(this.frogMove.move.bind(this.frogMove), this.frogInterval));
        this.gameIntervals.push(setInterval(this.engine.updateField.bind(this.engine, this.snakeMove.snake, this.frogMove.frog), this.snakeInterval));
    }

    stopGame() {
        this.gameIntervals.forEach(interval => {
            clearInterval(interval);
        });
        this.gameIntervals = [];
        this.engine.gameOverAlert(this.menu.score.innerText);
        this.resetGame();
        this.engine.updateField(this.snakeMove.snake, this.frogMove.frog);
    }

    setMenuButtonsFunc() {
        this.menu.addClickListenerToButton(this.menu.startButton, this.startGame.bind(this));
        this.menu.addClickListenerToButton(this.menu.stopButton, this.stopGame.bind(this));
    }

    makeSnakeMove() {
        this.snakeMove.move();
        if (this.snakeMove.snake.head === -1) {
            this.menu.stopButton.dispatchEvent(this.simulatedClick());
        }
        if (this.gameGuard.isSnakeEatFrog()) {
            this.menu.increaseScore();
            this.snakeMove.increaseSnake();
            this.frogMove.move();
            clearInterval(this.gameIntervals[1]);
            this.gameIntervals[1] = setInterval(this.frogMove.move.bind(this.frogMove), this.frogInterval);
        }
    }

    simulatedClick() {
        return new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });
    }
    
    resetGame() {
        this.snakeMove.snake.resetState();
        this.menu.resetScore();
    }
}