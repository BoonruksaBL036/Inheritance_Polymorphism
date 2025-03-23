"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
class PushNotification {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sent(message) {
        console.log(`ข้อความนี้ถูกส่งจาก ${this.name} : ${message}`);
    }
}
exports.PushNotification = PushNotification;
