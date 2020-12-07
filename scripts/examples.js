import { createDrumSampler, createSynth } from './helpers/audio.js';
// var drumSampler = createDrumSampler();
var synth = createSynth();

var example1 = {
  title: "Example 1: Finding pitch in indeterminate sound (not done)",
  tag: "example1",
  loops: [
    {
      btnText: "Play loop",
      tempo: 80,
      parts: [
        {
          name: "Melody",
          pattern: ["C4", "D4", "E4", "G4", "F4", "G4", "A4", "F4",
                    "G4", "G4", "D4", "E4", "F4", "G4", "D4", "E4" ],
          source: synth,
          show: false,
        }
      ]    
    }
  ]
}

export var examples = {
  1: example1,
}