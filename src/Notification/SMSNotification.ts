import { Notification } from "./Notification";
export class SMSNotification implements Notification {
    private phone:string

    constructor(phone:string){
        this.phone = phone
    }

    public getPhone():string{
        return this.phone
    }

    public setPhone(phone:string){
        this.phone = phone
    }

    sent(message:string): void {
        console.log(`ได้รับการเเจ้งเตือนจาก ${this.phone} : ${message}`);
    }
}