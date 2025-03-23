export abstract class Instrument {
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

    public addMusic():string{
        return "I Like Me Better";
    }

    public play():void{}
}