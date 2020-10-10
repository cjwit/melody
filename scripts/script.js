import { Loop } from './Classes/Loop.js';
import {PlayButton } from './Classes/PlayButton.js';
import { loops } from './loops.js';
import { setUpLoop } from './audio.js';
import { Tone } from 'tone/build/esm/core/Tone';

console.log("connected");

const Play = new PlayButton();
const melodyLoop = new Loop("melodyLoop", loops.melodyLoop);
const bassLoop = new Loop("bassLoop", loops.bassLoop);
const drumLoop = new Loop("drumLoop", loops.drumLoop);

const melodySequences = setUpLoop(loops.melodyLoop);
const bassSequences = setUpLoop(loops.bassLoop);
const drumSequences = setUpLoop(loops.drumLoop);
