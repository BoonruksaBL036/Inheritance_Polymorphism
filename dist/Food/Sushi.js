"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sushi = void 0;
const Food_1 = require("./Food");
class Sushi extends Food_1.Food {
    addRice() {
        console.log(`${this.getName()} : เพิ่มข้าว`);
    }
    littelRice() {
        console.log(`${this.getName()} : ข้าวน้อย`);
    }
    addWasabi() {
        console.log(`${this.getName()} : ใส่วาซาบิ`);
    }
}
exports.Sushi = Sushi;
