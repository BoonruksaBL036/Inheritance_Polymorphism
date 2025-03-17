export abstract class Drink{
    private name:string;

    constructor(name:string){
        this.name = name
    }

    public getName():string{
        return this.name
    }

    public setName(name:string):void{
        this.name = name
    }

    public serve():void{
        console.log(`เสิร์ฟ ${this.name} ให้ลูกค้า`);
        
    }
}