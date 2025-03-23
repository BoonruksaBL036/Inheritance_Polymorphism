"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingMachine = void 0;
class WashingMachine {
    constructor(isOn, waterLevelValue, mode) {
        this.isOn = false;
        this.waterLevelValue = 0;
        this.mode = "Normal";
        this.isOn = isOn;
        this.mode = mode;
        this.waterLevelValue = waterLevelValue;
    }
    getWaterLevel() {
        return this.waterLevelValue;
    }
    getMode() {
        return this.mode;
    }
    turnOn() {
        console.log("เครื่องซักผ้าเริ่มทำงาน");
    }
    setMode(mode) {
        if (this.isOn) {
            console.log("กรุณาเปิดเครื่องก่อนตั้งโหมดซัก");
            return;
        }
        this.mode = mode;
        console.log(`ตั้งค่าโหมดซักเป็น: ${mode}`);
    }
    setWaterLevel(level) {
        if (this.isOn) {
            console.log("กรุณาเปิดเครื่องก่อนตั้งระดับน้ำ");
            return;
        }
        this.waterLevelValue = level;
        console.log(`ระดับน้ำตั้งไว้ที่: ${level}`);
    }
    turnOff() {
        console.log("เครื่องซักผ้าปิดแล้ว");
    }
}
exports.WashingMachine = WashingMachine;
