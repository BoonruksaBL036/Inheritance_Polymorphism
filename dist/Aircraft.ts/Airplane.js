"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
const Aircraft_1 = require("./Aircraft");
class Airplane extends Aircraft_1.Aircraft {
    fly() {
        console.log(`${this.getModel()}กำลังรันเวย์ด้วยน้ำหนักด้วยผู้โดยสารทั้งหมด : ${this.getCapacity()} ที่นั่ง`);
    }
}
exports.Airplane = Airplane;
