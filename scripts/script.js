import { Loop } from './Classes/Loop.js';
import {PlayButton } from './Classes/PlayButton.js';
import { loops } from './loops.js';

console.log("connected");

const Play = new PlayButton();
const melodyLoop = new Loop("melodyLoop", loops.melodyLoop);
const bassLoop = new Loop("bassLoop", loops.bassLoop);
const drumLoop = new Loop("drumLoop", loops.drumLoop);