export abstract class Fish {
    private species : string;

    constructor(species:string){
        this.species = species
    }

    public getSpecies():string{
        return this.species
    }

    public setSpecies(species:string):void{
        this.species = species
    }

    public swim(): void {
        console.log("ว่ายน้ำ");
    }
}