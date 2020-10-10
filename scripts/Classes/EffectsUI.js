export class EffectsUI {
  constructor(tagId, source) {
    this.tagId = tagId;
    this.source = source;
    this.domObject = document.getElementById(this.tagId);

    this.createHandle();
  }

  createHandle() {
    var handle = document.createElement("span");
    handle.classList.add("handle");
    this.domObject.appendChild(handle);

    console.log(window.jQuery.ui)
    $(handle).draggable({ containment: "parent" });
  }
}