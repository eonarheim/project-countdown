import { Engine } from 'excalibur';
import { Bomber } from './actors/bomber/bomber.actor';

const game = new Engine({ width: 500, height: 500});
const player = new Bomber;

game.add(player);
game.start();
