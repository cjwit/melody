import { Example } from './Examples/Example.js';
import { ExampleWithSampler } from './Examples/ExampleWithSampler.js';
import { ExampleWithSlider } from './Examples/ExampleWithSlider.js';
import { ExampleWithScales } from './Examples/ExampleWithScales.js';
import { examples } from './examples.js';

var page = window.location.pathname.split("/").pop();

switch (page) {
  case "part1.html":
    // part 1
    const example1 = new ExampleWithSampler("example1", examples[1]);
    const example2 = new ExampleWithSlider("example2", "Drag to change the frequency");
    const example3 = new ExampleWithScales("example3", examples[3]);
    break;
  case "part2.html":
    // part 2
    const example4 = new Example("example4", examples[4]);
    const example5 = new Example("example5", examples[5]);
    break;
}
