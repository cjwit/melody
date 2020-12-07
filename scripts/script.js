import { Example } from './Examples/Example.js';
import { ExampleHeaderOnly } from './Examples/ExampleHeaderOnly.js';
import { examples } from './examples.js';

const example1 = new Example("example1", examples[1]);
const example2 = new ExampleHeaderOnly("example2", "Frequency pitch slider or mouse theremin widget");
const example3 = new ExampleHeaderOnly("example3", "Melody w/ random, major, lydian dominant, saba, pelog");
const example4 = new ExampleHeaderOnly("example4", "Odd melodies");