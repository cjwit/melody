/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/Classes/Loop.js":
/*!*********************************!*\
  !*** ./scripts/Classes/Loop.js ***!
  \*********************************/
/*! exports provided: Loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loop\", function() { return Loop; });\nclass Loop {\n  constructor(tagId, data) {\n    this.tagId = tagId;\n    this.parts = data.parts;\n    this.source = data.source;\n    this.tempo = data.tempo;\n    this.labelWidth = 6.0;\n    this.domObject = document.getElementById(tagId);\n\n    // this.makePlayButton(this.loops[0]);\n\n    this.makeRows();\n  }\n\n  // makePlayButton(loop, btnClass = null) {\n  //   var btnText = loop.btnText;\n  //   var button = document.createElement(\"span\");\n  //   button.classList.add(\"btn\");\n  //   button.classList.add(\"play-button\");\n  //   button.innerText = btnText;\n  //   if (btnClass) {\n  //     button.classList.add(btnClass);\n  //   }\n\n  //   button.addEventListener('click', async () => {\n\n  //     // start playing if stopped\n  //     if (button.innerText == btnText) {\n  //       this.stopAllExamples();\n  //       this.setUpLoop(loop);\n\n  //       await Tone.start();\n\n  //       if (loop.audio) {\n  //         loop.audioFile = new Audio(loop.audio);\n  //         loop.audioFile.play();\n  //       }\n\n  //       Tone.Transport.start(\"+0.01\")\n  //       button.innerText = \"Stop\"\n\n  //     // stop if playing\n  //     } else {\n  //       Tone.Transport.stop();\n\n  //       if (loop.audioFile) {\n  //         loop.audioFile.pause();\n  //         loop.audioFile.currentTime = 0;\n  //       }\n\n  //       button.innerText = btnText;\n  //     }\n  //   })\n\n  //   this.example.appendChild(button); \n  // }\n\n  // makeTitle() {\n  //   var titleSpan = document.createElement(\"span\");\n  //   titleSpan.classList.add(\"title\");\n  //   titleSpan.innerText = this.data.title;\n  //   this.example.appendChild(titleSpan)\n  // }\n\n  makeRows() {\n    var rows = 0;\n    for (let i = 0; i < this.parts.length; i++) {\n      let row = this.makeBoxes(this.parts[i]);\n      this.domObject.appendChild(row);\n      rows++;\n    }\n  }\n\n  makeBoxes(part) {\n    var row = document.createElement(\"div\");\n    row.classList.add(\"row-of-boxes\");\n    row = this.makeRowLabel(row, part.name);\n\n    for (let i = 0; i < part.pattern.length; i++) {\n      let box = document.createElement(\"span\");\n      box.classList.add(\"box\");\n\n      // filled or not\n      let status = \"empty-box\";\n      if (part.pattern[i] != null && part.pattern[i] != 0) {\n        status = \"filled-box\";\n      }\n      box.classList.add(status);\n\n      // style box width\n      let percent = 100.0 / part.pattern.length + \"%\";\n      let padding = this.labelWidth / part.pattern.length + 0.1;\n      box.style.width = \"calc(\" + percent + \" - \" + padding + \"em)\"\n\n      // for identification from the draw command\n      let className = part.name.toLowerCase().replace(\" \", \"-\") + \"-box\";\n      box.classList.add(className);\n\n      row.appendChild(box);\n    }\n    return row;\n  }\n\n  makeRowLabel(row, label) {\n    // add name to the row of boxes\n    var rowName = document.createElement(\"span\");\n    rowName.classList.add(\"row-label\");\n    rowName.innerText = label;\n    rowName.style.width = this.labelWidth + \"em\";\n    row.appendChild(rowName);\n    return row;\n  }\n\n  // stopAllExamples() {\n  //   var playButtons = Array.from(document.getElementsByClassName(\"play-button\"));\n  //   playButtons.forEach(button => {\n  //     if (button.innerText == \"Stop\") {\n  //       button.click();\n  //     }\n  //   })\n\n  //   // reset all active boxes\n  //   var activeBoxes = Array.from(document.getElementsByClassName(\"active-box\"));\n  //   activeBoxes.forEach(box => { box.classList.remove(\"active-box\") });\n  // }\n\n  // setUpLoop(loop) {\n  //   Tone.Transport.cancel(0);\n\n  //   for (let i = 0; i < loop.parts.length; i++) {\n  //     let part = loop.parts[i];\n  //     if (typeof part.pattern[0] == \"number\") {\n  //       part.pattern = this.convertPatternToNotes(part.pattern, part.note);\n  //     }\n  //     this.createLoop(part);\n  //   }\n\n  //   Tone.Transport.bpm.value = loop.tempo;\n  // }\n\n  // convertPatternToNotes(pattern, note) {\n  //   for (let i = 0; i < pattern.length; i++) {\n  //     if (pattern[i] == 0) {\n  //       pattern[i] = null\n  //     } else {\n  //       pattern[i] = note;\n  //     }\n  //   }\n  //   return pattern;\n  // }\n\n  // createLoop(part) {\n  //   var sequence = new Tone.Sequence((time, note) => {\n  //     if (part.show) {\n  //       this.visualCallback(part.name);\n  //     }\n  //     part.source.triggerAttackRelease(note, \"8n\", time);\n  //   }, part.pattern).start(0);\n  // }\n\n  // visualCallback(name) {\n  //   var name = name.toLowerCase().replace(\" \", \"-\");\n  //   var row = Array.from(this.example.getElementsByClassName(name + \"-box\"));\n  //   row = row.filter(box => box.classList.contains(\"filled-box\"));\n  //   var numBoxes = row.length;\n\n  //   // determine the active box\n  //   var active = 0;\n  //   for (let i = 0; i < row.length; i++) {\n  //     if (row[i].classList.contains(\"active-box\")) {\n  //       row[i].classList.remove(\"active-box\");\n  //       active = (i + 1) % numBoxes;\n  //       break;\n  //     }\n  //   }\n\n  //   // style the fade animation for the active box\n  //   var activeBox = row[active];\n  //   activeBox.style.backgroundColor = \"#2875a1\";\n  //   setTimeout(function () { }, 100);\n  //   setTimeout(function () {\n  //     activeBox.animate({\n  //       backgroundColor: \"#570E51\"\n  //     }, 1000);\n  //   });\n  //   setTimeout(function () {\n  //     activeBox.style.backgroundColor = \"#570E51\";\n  //   }, 1000);\n\n  //   // increment which box is active for the next iteration\n  //   activeBox.classList.add(\"active-box\");\n  // }\n}\n\n//# sourceURL=webpack:///./scripts/Classes/Loop.js?");

/***/ }),

/***/ "./scripts/Classes/PlayButton.js":
/*!***************************************!*\
  !*** ./scripts/Classes/PlayButton.js ***!
  \***************************************/
/*! exports provided: PlayButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayButton\", function() { return PlayButton; });\nclass PlayButton {\n  constructor() {\n    this.domObject = document.getElementById(\"playButton\");\n    this.domObject.innerText = \"Start\";\n  }\n}\n\n//# sourceURL=webpack:///./scripts/Classes/PlayButton.js?");

/***/ }),

/***/ "./scripts/loops.js":
/*!**************************!*\
  !*** ./scripts/loops.js ***!
  \**************************/
/*! exports provided: loops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loops\", function() { return loops; });\nvar melodyLoop = {\n  tempo: 108,\n  parts: [\n    {\n      name: \"Melody\",\n      pattern: [\"C4\", \"C4\", null, \"Bb3\", \"C4\", null, \"Eb4\", null],\n    }\n  ]\n}\n\nvar bassLoop = {\n  tempo: 108,\n  parts: [\n    {\n      name: \"Bass\",\n      pattern: [\"C2\", null, null, \"Bb2\", null, null, \"G2\", null],\n    }\n  ]\n}\n\nvar drumLoop = {\n  tempo: 108,\n  parts: [\n    {\n      name: \"Kick drum\",\n      note: \"A3\",\n      pattern: [1, 0, 0, 0, 1, 0, 0, 1],\n    },\n    {\n      name: \"Snare drum\",\n      note: \"A2\",\n      pattern: [0, 0, 1, 0, 0, 0, 1, 0],\n    },\n    {\n      name: \"High hat\",\n      note: \"A1\",\n      pattern: [1, 1, 1, 1, 1, 1, 1, 1],\n    },\n    {\n      name: \"Cowbell\",\n      note: \"A9\",\n      pattern: [0, 0, 1, 0, 0, 1, 0, 0],\n    }\n  ]\n}\n\nvar loops = {\n  drumLoop: drumLoop,\n  melodyLoop: melodyLoop,\n  bassLoop: bassLoop\n}\n\n//# sourceURL=webpack:///./scripts/loops.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Loop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Loop.js */ \"./scripts/Classes/Loop.js\");\n/* harmony import */ var _Classes_PlayButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/PlayButton.js */ \"./scripts/Classes/PlayButton.js\");\n/* harmony import */ var _loops_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loops.js */ \"./scripts/loops.js\");\n\n\n\n\nconsole.log(\"connected\");\n\nconst Play = new _Classes_PlayButton_js__WEBPACK_IMPORTED_MODULE_1__[\"PlayButton\"]();\nconst melodyLoop = new _Classes_Loop_js__WEBPACK_IMPORTED_MODULE_0__[\"Loop\"](\"melodyLoop\", _loops_js__WEBPACK_IMPORTED_MODULE_2__[\"loops\"].melodyLoop);\nconst bassLoop = new _Classes_Loop_js__WEBPACK_IMPORTED_MODULE_0__[\"Loop\"](\"bassLoop\", _loops_js__WEBPACK_IMPORTED_MODULE_2__[\"loops\"].bassLoop);\nconst drumLoop = new _Classes_Loop_js__WEBPACK_IMPORTED_MODULE_0__[\"Loop\"](\"drumLoop\", _loops_js__WEBPACK_IMPORTED_MODULE_2__[\"loops\"].drumLoop);\n\n//# sourceURL=webpack:///./scripts/script.js?");

/***/ })

/******/ });