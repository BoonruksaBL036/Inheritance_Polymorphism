import { Food } from "./Food";

export class Pizza extends Food{
    public addTopping():void{
        console.log(`${this.getName()}: เพิ่มสัปปะรด`);
    }

    public Thickdough():void{
        console.log(`${this.getName()}: แป้งหนา`);
    }

     public Thindough():void{
        console.log(`${this.getName()}: แป้งบาง`);
    }
}
