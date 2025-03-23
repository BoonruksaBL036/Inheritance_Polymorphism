import { Appliance } from "./Appliance";

export class WashingMachine implements Appliance{
    private isOn: boolean = false;
    private waterLevelValue: number = 0;
    private mode: string = "Normal";

    constructor(isOn:boolean,waterLevelValue:number,mode:string){
        this.isOn = isOn
        this.mode = mode
        this.waterLevelValue = waterLevelValue
    }

    getWaterLevel(): number {
        return this.waterLevelValue;
    }

    getMode(): string {
        return this.mode;
    }

    turnOn(): void {
        console.log("เครื่องซักผ้าเริ่มทำงาน");
    }

    public setMode(mode: string):void{
        if (this.isOn) {
            console.log("กรุณาเปิดเครื่องก่อนตั้งโหมดซัก");
            return;
        }
        this.mode = mode;
        console.log(`ตั้งค่าโหมดซักเป็น: ${mode}`);
    }
    
    public setWaterLevel(level: number):void{
        if (this.isOn) {
            console.log("กรุณาเปิดเครื่องก่อนตั้งระดับน้ำ");
            return;
        }
        this.waterLevelValue = level;
        console.log(`ระดับน้ำตั้งไว้ที่: ${level}`);
    }

    turnOff(): void {
        console.log("เครื่องซักผ้าปิดแล้ว");
        
    }
}