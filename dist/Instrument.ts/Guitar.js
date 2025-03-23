"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
const Instrument_1 = require("./Instrument");
class Guitar extends Instrument_1.Instrument {
    play() {
        console.log(`ดีด ${this.getName()} เพื่อเล่นเพลง ${this.addMusic()}`);
    }
}
exports.Guitar = Guitar;
