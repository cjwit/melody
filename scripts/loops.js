import { createDrumSampler, createSynth } from './helpers/audio.js';
var drumSampler = createDrumSampler();
var synth = createSynth();

//
// examples
//

var melodyLoop = {
  source: synth,
  tempo: 108,
  parts: [
    {
      name: "C4",
      note: "C4",
      pattern: [1, 0, 0, 0, 0, 0, 1, 0],
    },
    {
      name: "D4",
      note: "D4",
      pattern: [0, 0, 1, 0, 0, 0, 0, 1],
    }
  ]
}

var bassLoop = {
  source: synth,
  tempo: 108,
  parts: [
    {
      name: "C2",
      note: "C2",
      pattern: [1, 0, 0, 0, 0, 0, 1, 0],
    },
    {
      name: "D2",
      note: "D2",
      pattern: [0, 0, 1, 0, 0, 0, 0, 1],
    }
  ]
}

var drumLoop = {
  source: drumSampler,
  tempo: 108,
  parts: [
    {
      name: "High hat",
      note: "A1",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      name: "Snare drum",
      note: "A2",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
    },
    {
      name: "Kick drum",
      note: "A3",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: "Clave",
      note: "A4",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: "Cowbell",
      note: "A9",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: "Bongo 1",
      note: "A6",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: "Bongo 2",
      note: "A7",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: "Tom",
      note: "A8",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
    }
  ]
}

export var loops = {
  drumLoop: drumLoop,
  melodyLoop: melodyLoop,
  bassLoop: bassLoop
}