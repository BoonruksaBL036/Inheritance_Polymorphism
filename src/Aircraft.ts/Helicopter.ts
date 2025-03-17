import { Aircraft } from "./Aircraft";

export class Helicopter extends Aircraft {
    public fly(): void {
        console.log(`${this.getModel()}กำลังบินขึ้นด้วยน้ำหนัก ${this.getCapacity()}`);
    }
}