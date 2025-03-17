import { Appliance } from "./Appliance";

export class Microwave implements Appliance {
    turnOn(): void {
        console.log(`หมุนเวลาเพื่อเปิด`);
    }

    turnOff(): void {
        console.log(`เวฃาหมดจะปิด`);
        
    }
}