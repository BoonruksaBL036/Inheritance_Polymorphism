import { Notification } from "./Notification";
export class SMSNotification implements Notification {
    private phone:number

    constructor(phone:number){
        this.phone = phone
    }

    sent(message:string): void {
        console.log(`${this.phone} : ${message}`);
    }
}