"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refrigerator = void 0;
class Refrigerator {
    constructor() {
        this.isOn = false;
        this.doorOpen = false;
    }
    turnOn() {
        this.isOn = true;
        console.log("ตู้เย็นเปิดแล้ว");
    }
    turnOff() {
        this.isOn = false;
        console.log("ตู้เย็นปิดแล้ว");
    }
    openDoor() {
        if (this.isOn) {
            this.doorOpen = true;
            console.log("ประตูเปิด → ไฟติด");
        }
        else {
            console.log("กรุณาเปิดตู้เย็นก่อน");
        }
    }
    closeDoor() {
        if (this.isOn) {
            this.doorOpen = false;
            console.log("ประตูปิด → ไฟดับ");
        }
    }
    isDoorOpen() {
        return this.doorOpen;
    }
}
exports.Refrigerator = Refrigerator;
