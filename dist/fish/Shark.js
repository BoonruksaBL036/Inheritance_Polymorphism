"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shark = void 0;
const Fish_1 = require("./Fish");
class Shark extends Fish_1.Fish {
    action() {
        console.log(`${this.getSpecies()} : กำลังไล่ล่า`);
    }
}
exports.Shark = Shark;
