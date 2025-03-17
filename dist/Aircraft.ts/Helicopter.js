"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helicopter = void 0;
const Aircraft_1 = require("./Aircraft");
class Helicopter extends Aircraft_1.Aircraft {
    fly() {
        console.log(`${this.getModel()}กำลังบินขึ้นด้วยน้ำหนัก ${this.getCapacity()}`);
    }
}
exports.Helicopter = Helicopter;
