import { createDrumSampler, createSynth } from './helpers/audio.js';
// var drumSampler = createDrumSampler();
var drumSampler = createDrumSampler();
var synth = createSynth();

var example1 = {
  title: "Example 1: Finding pitch in indeterminate sound",
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
          source: drumSampler,
          show: false,
        }
      ]    
    }
  ]
}

var example3 = {
  title: "Example 3: Different scales",
  tag: "example3",
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

var example4 = {
  title: "Example 4: A disjointed melody",
  tag: "example4",
  loops: [
    {
      btnText: "Play loop",
      tempo: 80,
      parts: [
        {
          name: "Melody",
          pattern: ["E5", "A4", "B4", "D5", null, "E5", "F5", null],
          source: synth,
          show: false,
        }
      ]    
    }
  ]
}

var example5 = {
  title: "Example 5: With a counter melody",
  tag: "example5",
  loops: [
    {
      btnText: "Play loop",
      tempo: 80,
      parts: [
        {
          name: "Melody",
          pattern: ["E5", "A4", "B4", "D5", null, "E5", "F5", null],
          source: synth,
          show: false,
        },
        {
          name: "Counter",
          pattern: ["C4", null, "G4", null, "F4", null, "G4", "D4"],
          source: synth,
          show: false,
        }
      ]      
    }
  ]
}

export var examples = {
  1: example1,
  3: example3,
  4: example4,
  5: example5
}