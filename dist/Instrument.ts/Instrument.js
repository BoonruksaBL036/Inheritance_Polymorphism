"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
class Instrument {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    addMusic() {
        console.log(`I Like Me Better`);
    }
    play() { }
}
exports.Instrument = Instrument;
