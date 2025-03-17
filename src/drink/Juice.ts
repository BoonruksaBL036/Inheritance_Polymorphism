import { Drink } from "./Drink";

export class Juice extends Drink{
    addSyrup():void{
        console.log(`${this.getName()}เพิ่มน้ำเชื่อม`); 
    }
    smoothie():void{
        console.log(`${this.getName()}Smoothie`);
        
    }
}