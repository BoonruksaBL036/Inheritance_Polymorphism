import { Appliance } from "./Appliance";

export class Microwave implements Appliance {

    public setTime(time:number):void{
        if(time > 0){
            this.turnOn()
            for(let i = 0; i <= time; i++){
                if(i == time){
                    this.turnOff()
                }
            }
        }
    }

    turnOn(): void {
        console.log(`หมุนเวลาเพื่อเปิด`);
    }

    turnOff(): void {
        console.log(`เวลาหมดจะปิด`);
        
    }
}