import * as Tone from "tone";
import { Example } from "./Example.js";

const NAMES =      ["C4",   "D4",   "E4",   "F4",   "G4",   "A4",   "B4",   "C5"];
const MAJOR =   [261.63, 293.66, 329.63, 349.23, 392,    440,    493.88, 523.25];
const JUST =       [261.63, 294.33, 327.03, 348.83, 392.44, 436.05, 490.55, 523.25];
const MINOR =      [261.63, 293.66, 311.13, 349.23, 392,    415.3,  466.16, 523.25];
const LYDIAN_AUG = [261.63, 293.66, 329.63, 369.99, 415.30, 440,    466.16, 523.25];
const SABA =       [261.63, 285.31, 311.13, 328.63, 392,    415.3,  466.16, 523.25];
const PELOG =      [267.36, 287.14, 308.07, 366.16, 409.37, 424.16, 456.85, 534.72];

export class ExampleWithScales extends Example {
  constructor(tagId, data) {
    super(tagId, data);
    this.frequencyObject = NAMES;
    this.setFrequencies(MAJOR);
    this.makeScaleButtons();
  }

  setFrequencies(newFreqObject) {
    var pattern = this.loops[0].parts[0].pattern;
    for (let i = 0; i < pattern.length; i++) {
      let note = this.frequencyObject.indexOf(pattern[i])
      pattern[i] = newFreqObject[note]
    }
    this.frequencyObject = newFreqObject;
    this.loops[0].parts[0].pattern = pattern;
  }

  makeScaleButtons() {
    var scaleNames = ["Major", "Just", "Minor", "Lydian augmented", "Saba", "Pelog"];

    var scaleButtons = document.createElement("div");
    scaleButtons.classList.add("button-container")

    for (let i = 0; i < scaleNames.length; i++) {
      let button = document.createElement("span");
      button.classList.add("btn");
      // button.classList.add("play-button");
      button.innerText = scaleNames[i];

      button.addEventListener('click', async () => {
      
        let newScale;
        switch (button.innerText) {
          case ("Major"): newScale = MAJOR; break;
          case ("Just"): newScale = JUST; break;
          case ("Minor"): newScale = MINOR; break;
          case ("Lydian augmented"): newScale = LYDIAN_AUG; break;
          case ("Saba"): newScale = SABA; break;
          case ("Pelog"): newScale = PELOG; break;
        }

        this.setFrequencies(newScale);
        this.stopAllExamples(this.tagId);
        this.setUpLoop(this.loops[0]);
  
        var playButton = this.example.childNodes[1];
        playButton.innerText = "Stop";

        await Tone.start();
        Tone.Transport.start("+0.01")

      })
  
      scaleButtons.appendChild(button); 
    }

    this.example.appendChild(scaleButtons);
  }

  setUpLoop(loop) {
    Tone.Transport.cancel(0);

    for (let i = 0; i < loop.parts.length; i++) {
      let part = loop.parts[i];
      this.createLoop(part);
    }

    Tone.Transport.bpm.value = loop.tempo;
  }
}