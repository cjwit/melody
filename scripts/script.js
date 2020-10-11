import * as Tone from 'tone';
import { Loop } from './Classes/Loop.js';
import { PlayButton } from './Classes/PlayButton.js';
import { EffectsUI } from './Classes/EffectsUI.js';
import { loops } from './loops.js';
import { createDrumSampler, createSynth, setUpLoop } from './audio.js';

// set up graphical elements
const Play = new PlayButton();
const melodyLoop = new Loop("melodyLoop", loops.melodyLoop);
const bassLoop = new Loop("bassLoop", loops.bassLoop);
const drumLoop = new Loop("drumLoop", loops.drumLoop);

// create sources
const drumSampler = createDrumSampler();
const drumGainNode = new Tone.Gain(0.5).toDestination();
drumSampler.connect(drumGainNode);

const melodySynth = createSynth();
const melodyGainNode = new Tone.Gain(1).toDestination();
melodySynth.connect(melodyGainNode);

const bassSynth = createSynth();

// add effects
const melodyPhaser = new Tone.Phaser({
  frequency: 15,
  octaves: 5,
  baseFrequency: 1000
}).toDestination();
melodyPhaser.Q.value = 5;

const melodyAutoWah = new Tone.AutoWah(50, 6, -30).toDestination();
melodyAutoWah.Q.value = 5;

melodySynth.chain(melodyAutoWah, melodyPhaser);

// create sequences
const melodySequences = setUpLoop(loops.melodyLoop, melodySynth);
const bassSequences = setUpLoop(loops.bassLoop, bassSynth);
const drumSequences = setUpLoop(loops.drumLoop, drumSampler);

// create filter listeners
const synthEffects = new EffectsUI("synthEffects", melodyPhaser, melodyAutoWah);