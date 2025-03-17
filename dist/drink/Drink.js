"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    serve() {
        console.log(`เสิร์ฟ ${this.name} ให้ลูกค้า`);
    }
}
exports.Drink = Drink;
