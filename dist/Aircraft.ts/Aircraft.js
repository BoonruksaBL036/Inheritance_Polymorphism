"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getCapacity() {
        return this.capacity;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
    fly() {
    }
}
exports.Aircraft = Aircraft;
