"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
class SMSNotification {
    constructor(phone) {
        this.phone = phone;
    }
    sent(message) {
        console.log(`${this.phone} : ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
