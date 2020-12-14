import * as Tone from "tone";
import { Example } from "./Example.js";

export class ExampleWithSampler extends Example {
  constructor(tagId, data) {
    super(tagId, data);
  }
}