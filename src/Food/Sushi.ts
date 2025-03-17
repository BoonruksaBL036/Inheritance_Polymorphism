import { Food } from "./Food";

export class Sushi extends Food{
    public addRice():void{
        console.log(`${this.getName()} : เพิ่มข้าว`);
    }

    public littelRice():void{
        console.log(`${this.getName()} : ข้าวน้อย`);
    }

    public addWasabi():void{
        console.log(`${this.getName()} : ใส่วาซาบิ`);
    }

}