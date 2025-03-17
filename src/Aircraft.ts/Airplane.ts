import { Aircraft } from "./Aircraft";

export class Airplane extends Aircraft{
    public fly(): void {
        console.log(`${this.getModel()}กำลังรันเวย์ด้วยน้ำหนักด้วยผู้โดยสารทั้งหมด : ${this.getCapacity()} ที่นั่ง`);
    }
}