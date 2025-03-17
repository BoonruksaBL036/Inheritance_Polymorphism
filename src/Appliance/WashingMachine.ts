import { Appliance } from "./Appliance";

export class WashingMachine implements Appliance{
    turnOn(): void {
    console.log(`start`);
    }

    public waterLevel():void{
        console.log(``);
    }

    public Mode():void{
        console.log(``);
    }

    turnOff(): void {
        console.log(``);
        
    }
}