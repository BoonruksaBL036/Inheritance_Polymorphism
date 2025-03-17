export abstract class Aircraft {
    private model:string;
    private capacity:number;

    constructor(model:string,capacity:number){
        this.model = model
        this.capacity = capacity
    }

    public getModel():string{
        return this.model
    }

    public setModel(model:string):void{
        this.model = model
    }

    public getCapacity():number{
        return this.capacity
    }

    public setCapacity(capacity:number):void{
        this.capacity = capacity
    }

    public fly():void{
    }
}