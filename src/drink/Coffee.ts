import { Drink } from "./Drink";

export class Coffee extends Drink{
    addShot(num:number):void{
        console.log(`เพิ่ม ${num} ช็อต`); 
    }

    addMilk():void{
        console.log(`${this.getName()}ใส่นม`);
    }

    addSugar():void{
        console.log(`${this.getName()}ใส่น้ำตาล`);
        
    }
}