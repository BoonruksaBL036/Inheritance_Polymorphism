"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dolphin = void 0;
const Fish_1 = require("./Fish");
class Dolphin extends Fish_1.Fish {
    action() {
        console.log(`${this.getSpecies()} : ว่ายน้ำเป็นฝูง`);
    }
}
exports.Dolphin = Dolphin;
