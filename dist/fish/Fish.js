"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
    setSpecies(species) {
        this.species = species;
    }
    swim() {
        console.log("ว่ายน้ำ");
    }
}
exports.Fish = Fish;
