import { Appliance } from "./Appliance";

export class Refrigerator implements Appliance{
    turnOn(): void {
        console.log(`ไฟติด`);
    }

    turnOff(): void {
        console.log(`ไฟดับ`);
    }
}