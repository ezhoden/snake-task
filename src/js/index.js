import '../css/index.css';
import Snake from './Snake';
import Game from './Game';
import Control from './Control';
import Frog from './Frog';
import MoveSnake from './MoveSnake';
import GameGuard from './GameGuard';
import MoveFrog from './MoveFrog';



const config = {
    fieldSize: 100,
    snakeInterval: 150,
    frogInterval: 3000
}

const frog = new Frog();
const snake = new Snake();
snake.resetState();

const gameGuard = new GameGuard(config, snake, frog);

const moveSnake = new MoveSnake(config, gameGuard, snake);
const moveFrog = new MoveFrog(config, gameGuard, frog);
moveFrog.move();

const control = new Control(snake);
control.startWatch();

const game = new Game(config, gameGuard, control, moveSnake, moveFrog);
game.initNewGame();