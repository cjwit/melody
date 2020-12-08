import * as Tone from "tone";

export class ExampleWithSlider {
  constructor(tagId, title) {
    this.tagId = tagId;
    this.title = title;
    this.example = document.getElementById(tagId);
    this.osc = new Tone.Oscillator(440, "sine").toDestination();

    this.makePlayButton();
    this.makeTitle();
    this.freqSpan = document.getElementById("freq");
    this.buildSlider();
  }

  makePlayButton(btnClass = null) {
    var btnText = "Start";
    var button = document.createElement("span");
    button.classList.add("btn");
    button.classList.add("play-button");
    button.innerText = btnText;
    if (btnClass) {
      button.classList.add(btnClass);
    }

    button.addEventListener('click', async () => {
      
      // start playing if stopped
      if (button.innerText == btnText) {
        this.stopAllExamples();
        await Tone.start();
        this.osc.start();
        button.innerText = "Stop"
      
      // stop if playing
      } else {
        this.osc.stop();
        button.innerText = btnText;
      }
    })

    this.example.appendChild(button); 
  }

  buildSlider() {
    // create slider object
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 220;
    slider.max = 1760;
    slider.value = 440;
    slider.classList.add("slider");
    slider.id = this.example.tagId + "slider";
    sliderContainer.appendChild(slider);
    this.example.insertBefore(sliderContainer, this.example.childNodes[3]);

    // capture slider values
    this.osc.frequency.value = slider.value;
    slider.addEventListener("input", () => {
      this.osc.frequency.rampTo(slider.value);
      this.freqSpan.innerText = slider.value;
    })
  }

  makeTitle() {
    var titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.innerHTML = this.title + " (<span id='freq'>440</span> Hz)";
    this.example.appendChild(titleSpan)
  }

  stopAllExamples() {
    var playButtons = Array.from(document.getElementsByClassName("play-button"));
    playButtons.forEach(button => {
      if (button.innerText == "Stop") {
        button.click();
      }
    })

    // reset all active boxes
    var activeBoxes = Array.from(document.getElementsByClassName("active-box"));
    activeBoxes.forEach(box => { box.classList.remove("active-box") });
  }
}