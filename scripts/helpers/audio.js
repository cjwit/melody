import * as Tone from 'tone';

// import hihat from "../../audio/hihat.mp3";
// import snare from "../../audio/snare.mp3";
// import kick from "../../audio/kick.mp3";
// import clave from "../../audio/clave.mp3";
// import ding from "../../audio/ding.mp3";
// import bongo1 from "../../audio/bongo1.mp3";
// import bongo2 from "../../audio/bongo2.mp3";
// import tom3 from "../../audio/tom3.mp3";
// import cowbell from "../../audio/cowbell.mp3";
// import riqqDum from "../../audio/riqq-dum.mp3";
// import riqqTek from "../../audio/riqq-tek.mp3";

import dog from "../../audio/dog.mp3";


// drum sampler configuration
export function createDrumSampler() {
  const drumSampler = new Tone.Sampler({
    urls: {
      "C#4": dog
    },
  }).toDestination();

  return drumSampler;
}

export function createSynth() {
  const synth = new Tone.Synth().toDestination();
  return synth;
}