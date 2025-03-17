"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const Drink_1 = require("./Drink");
class Coffee extends Drink_1.Drink {
    addShot(num) {
        console.log(`เพิ่ม ${num} ช็อต`);
    }
    addMilk() {
        console.log(`${this.getName()}ใส่นม`);
    }
    addSugar() {
        console.log(`${this.getName()}ใส่น้ำตาล`);
    }
}
exports.Coffee = Coffee;
