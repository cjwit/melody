import { Example } from './Examples/Example.js';
import { ExampleWithSlider } from './Examples/ExampleWithSlider.js';
import { ExampleHeaderOnly } from './Examples/ExampleHeaderOnly.js';
import { examples } from './examples.js';

// part 1
const example1 = new Example("example1", examples[1]);
const example2 = new ExampleWithSlider("example2", "Drag to change the frequency");
const example3 = new ExampleHeaderOnly("example3", "Melody w/ random, major, lydian dominant, saba, pelog");
const example4 = new ExampleHeaderOnly("example4", "Odd melodies");

// part 2
const example5 = new ExampleHeaderOnly("example5", "Melodies, worn, surprise, jarring");
const example6 = new ExampleHeaderOnly("example6", "Same melodies, with countermelodies");
