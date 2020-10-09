import * as Tone from "tone";

export class Loop {
  constructor(tagId, data) {
    this.tagId = tagId;
    this.parts = data.parts;
    this.source = data.source;
    this.tempo = data.tempo;
    this.labelWidth = 6.0;
    this.domObject = document.getElementById(tagId);
    console.log(this.domObject, tagId, document.getElementsByClassName("loop"));

    // this.makePlayButton(this.loops[0]);

    this.makeRows();
  }

  // makePlayButton(loop, btnClass = null) {
  //   var btnText = loop.btnText;
  //   var button = document.createElement("span");
  //   button.classList.add("btn");
  //   button.classList.add("play-button");
  //   button.innerText = btnText;
  //   if (btnClass) {
  //     button.classList.add(btnClass);
  //   }

  //   button.addEventListener('click', async () => {

  //     // start playing if stopped
  //     if (button.innerText == btnText) {
  //       this.stopAllExamples();
  //       this.setUpLoop(loop);

  //       await Tone.start();

  //       if (loop.audio) {
  //         loop.audioFile = new Audio(loop.audio);
  //         loop.audioFile.play();
  //       }

  //       Tone.Transport.start("+0.01")
  //       button.innerText = "Stop"

  //     // stop if playing
  //     } else {
  //       Tone.Transport.stop();

  //       if (loop.audioFile) {
  //         loop.audioFile.pause();
  //         loop.audioFile.currentTime = 0;
  //       }

  //       button.innerText = btnText;
  //     }
  //   })

  //   this.example.appendChild(button); 
  // }

  // makeTitle() {
  //   var titleSpan = document.createElement("span");
  //   titleSpan.classList.add("title");
  //   titleSpan.innerText = this.data.title;
  //   this.example.appendChild(titleSpan)
  // }

  makeRows() {
    var rows = 0;
    for (let i = 0; i < this.parts.length; i++) {
      let row = this.makeBoxes(this.parts[i]);
      this.domObject.appendChild(row);
      rows++;
    }
  }

  makeBoxes(part) {
    var row = document.createElement("div");
    row.classList.add("row-of-boxes");
    row = this.makeRowLabel(row, part.name);

    for (let i = 0; i < part.pattern.length; i++) {
      let box = document.createElement("span");
      box.classList.add("box");

      // filled or not
      let status = "empty-box";
      if (part.pattern[i] != null && part.pattern[i] != 0) {
        status = "filled-box";
      }
      box.classList.add(status);

      // style box width
      let percent = 100.0 / part.pattern.length + "%";
      let padding = this.labelWidth / part.pattern.length + 0.1;
      box.style.width = "calc(" + percent + " - " + padding + "em)"

      // for identification from the draw command
      let className = part.name.toLowerCase().replace(" ", "-") + "-box";
      box.classList.add(className);

      row.appendChild(box);
    }
    return row;
  }

  makeRowLabel(row, label) {
    // add name to the row of boxes
    var rowName = document.createElement("span");
    rowName.classList.add("row-label");
    rowName.innerText = label;
    rowName.style.width = this.labelWidth + "em";
    row.appendChild(rowName);
    return row;
  }

  // stopAllExamples() {
  //   var playButtons = Array.from(document.getElementsByClassName("play-button"));
  //   playButtons.forEach(button => {
  //     if (button.innerText == "Stop") {
  //       button.click();
  //     }
  //   })

  //   // reset all active boxes
  //   var activeBoxes = Array.from(document.getElementsByClassName("active-box"));
  //   activeBoxes.forEach(box => { box.classList.remove("active-box") });
  // }

  // setUpLoop(loop) {
  //   Tone.Transport.cancel(0);

  //   for (let i = 0; i < loop.parts.length; i++) {
  //     let part = loop.parts[i];
  //     if (typeof part.pattern[0] == "number") {
  //       part.pattern = this.convertPatternToNotes(part.pattern, part.note);
  //     }
  //     this.createLoop(part);
  //   }

  //   Tone.Transport.bpm.value = loop.tempo;
  // }

  // convertPatternToNotes(pattern, note) {
  //   for (let i = 0; i < pattern.length; i++) {
  //     if (pattern[i] == 0) {
  //       pattern[i] = null
  //     } else {
  //       pattern[i] = note;
  //     }
  //   }
  //   return pattern;
  // }

  // createLoop(part) {
  //   var sequence = new Tone.Sequence((time, note) => {
  //     if (part.show) {
  //       this.visualCallback(part.name);
  //     }
  //     part.source.triggerAttackRelease(note, "8n", time);
  //   }, part.pattern).start(0);
  // }

  // visualCallback(name) {
  //   var name = name.toLowerCase().replace(" ", "-");
  //   var row = Array.from(this.example.getElementsByClassName(name + "-box"));
  //   row = row.filter(box => box.classList.contains("filled-box"));
  //   var numBoxes = row.length;

  //   // determine the active box
  //   var active = 0;
  //   for (let i = 0; i < row.length; i++) {
  //     if (row[i].classList.contains("active-box")) {
  //       row[i].classList.remove("active-box");
  //       active = (i + 1) % numBoxes;
  //       break;
  //     }
  //   }

  //   // style the fade animation for the active box
  //   var activeBox = row[active];
  //   activeBox.style.backgroundColor = "#2875a1";
  //   setTimeout(function () { }, 100);
  //   setTimeout(function () {
  //     activeBox.animate({
  //       backgroundColor: "#570E51"
  //     }, 1000);
  //   });
  //   setTimeout(function () {
  //     activeBox.style.backgroundColor = "#570E51";
  //   }, 1000);

  //   // increment which box is active for the next iteration
  //   activeBox.classList.add("active-box");
  // }
}