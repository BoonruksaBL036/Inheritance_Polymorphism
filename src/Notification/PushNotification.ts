import { Notification } from "./Notification";

export class PushNotification implements Notification{
    private name:string;

    constructor(name:string){
        this.name = name
    }

    public getName():string{
        return this.name
    }

    public setName(name:string):void{
        this.name = name
    }

    sent(message:string): void {
        console.log(`ข้อความนี้ถูกส่งจาก ${this.name} : ${message}`);
    }
}