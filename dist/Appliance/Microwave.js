"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = void 0;
class Microwave {
    setTime(time) {
        if (time > 0) {
            this.turnOn();
            for (let i = 0; i <= time; i++) {
                if (i == time) {
                    this.turnOff();
                }
            }
        }
    }
    turnOn() {
        console.log(`หมุนเวลาเพื่อเปิด`);
    }
    turnOff() {
        console.log(`เวลาหมดจะปิด`);
    }
}
exports.Microwave = Microwave;
