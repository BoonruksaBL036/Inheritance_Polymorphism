"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name;
    }
    serve() {
        console.log(`เสิร์ฟ ${this.name} ให้ลูกค้า`);
    }
}
exports.Food = Food;
