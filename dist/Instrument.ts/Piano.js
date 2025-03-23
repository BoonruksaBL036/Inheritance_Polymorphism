"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = void 0;
const Instrument_1 = require("./Instrument");
class Piano extends Instrument_1.Instrument {
    play() {
        console.log(`กด ${this.getName()} เพื่อเล่นเพลง ${this.addMusic()}`);
    }
}
exports.Piano = Piano;
