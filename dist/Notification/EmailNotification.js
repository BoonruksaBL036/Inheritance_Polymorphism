"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    sent(message) {
        console.log(`ได้รับการเเจ้งเตือนจาก ${this.email} : ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
