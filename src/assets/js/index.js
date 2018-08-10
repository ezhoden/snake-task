import '../../css/index.css';
import Snake from './Snake';
import Game from './Game';
import Engine from './Engine';
import Control from './Control';
import Menu from './Menu';
import Frog from './Frog';
import MoveSnake from './MoveSnake';
import GameGuard from './GameGuard';
import { random } from 'lodash';
import MoveFrog from './MoveFrog';

const FIELD_SIZE = 324;
const SNAKE_INTERVAL = 100;
const FROG_INTERVAL = 2500;


const menu = new Menu();
const engine = new Engine();
const snake = new Snake();
const randomStartPositionForFrog = random(FIELD_SIZE - 3, false) + 2;
const frog = new Frog(randomStartPositionForFrog);
const gameGuard = new GameGuard(menu, FIELD_SIZE, snake, frog);
const moveSnake = new MoveSnake(FIELD_SIZE, gameGuard, snake);
const moveFrog = new MoveFrog(FIELD_SIZE, gameGuard, frog);
const control = new Control(snake);
const game = new Game(menu, gameGuard, engine, SNAKE_INTERVAL, FROG_INTERVAL, control, moveSnake, moveFrog);
game.initNewGame();