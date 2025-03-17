"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = void 0;
const Drink_1 = require("./Drink");
class Juice extends Drink_1.Drink {
    addSyrup() {
        console.log(`${this.getName()}เพิ่มน้ำเชื่อม`);
    }
    smoothie() {
        console.log(`${this.getName()}Smoothie`);
    }
}
exports.Juice = Juice;
