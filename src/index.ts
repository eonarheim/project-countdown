import { Engine } from 'excalibur';
import { Scene } from 'excalibur';
import { Group } from 'excalibur';
import { Bomber } from './actors/bomber/bomber.actor';

const bombers = [];

//instantiate game engine
const game = new Engine({ width: 1024, height: 768});

//instantiate scenes
const mainScene = new Scene();

//create groups
const bombersGroup = new Group('bombers', mainScene);

//create game objects
const player = new Bomber;
bombers.push(player);


//add scenes to the game
game.add('mainScene', mainScene);

//add game objects to scenes
for (var i = 0; i < bombers.length; i++) {
    mainScene.add(bombers[i]);
}

//start the game
game.start();

//start scenes
game.goToScene('mainScene');
