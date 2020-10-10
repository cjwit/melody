import * as Tone from 'tone';
import { Loop } from './Classes/Loop.js';
import { PlayButton } from './Classes/PlayButton.js';
import { EffectsUI } from './Classes/EffectsUI.js';
import { loops } from './loops.js';
import { setUpLoop } from './audio.js';

// set up graphical elements
const Play = new PlayButton();
const melodyLoop = new Loop("melodyLoop", loops.melodyLoop);
const bassLoop = new Loop("bassLoop", loops.bassLoop);
const drumLoop = new Loop("drumLoop", loops.drumLoop);

// create effects
const drumGainNode = new Tone.Gain(0.5).toDestination();
const melodyGainNode = new Tone.Gain(1).toDestination();

const melodyPhaser = new Tone.Phaser({
  frequency: 15,
  octaves: 5,
  baseFrequency: 1000
}).toDestination();
melodyPhaser.Q.value = 5;

const melodyAutoWah = new Tone.AutoWah(50, 6, -30).toDestination();
melodyAutoWah.Q.value = 5;

// create sequences
const melodySequences = setUpLoop(loops.melodyLoop, melodyGainNode, melodyPhaser, melodyAutoWah);
const bassSequences = setUpLoop(loops.bassLoop, melodyGainNode);
const drumSequences = setUpLoop(loops.drumLoop, drumGainNode);

// create filter listeners
const synthEffects = new EffectsUI("synthEffects", melodyPhaser, melodyAutoWah);