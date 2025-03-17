"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const Food_1 = require("./Food");
class Pizza extends Food_1.Food {
    addTopping() {
        console.log(`${this.getName()}: เพิ่มสัปปะรด`);
    }
    Thickdough() {
        console.log(`${this.getName()}: แป้งหนา`);
    }
    Thindough() {
        console.log(`${this.getName()}: แป้งบาง`);
    }
}
exports.Pizza = Pizza;
