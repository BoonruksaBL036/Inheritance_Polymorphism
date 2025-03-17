import { Notification } from "./Notification";
export class EmailNotification implements Notification{
    private email:string;

    constructor(email:string){
        this.email = email
    }

    public getEmail():string{
        return this.email
    }

    public setEmail(email:string):void{
        this.email = email
    }

    sent(message:string): void {
        console.log(`ได้รับการเเจ้งเตือนจาก ${this.email} : ${message}`);
    }
}