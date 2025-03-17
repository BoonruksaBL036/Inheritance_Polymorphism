import { Fish } from "./Fish";

export class Dolphin extends Fish {

    public action():void{
        console.log(`${this.getSpecies()} : ว่ายน้ำเป็นฝูง`);
        
    } 

}