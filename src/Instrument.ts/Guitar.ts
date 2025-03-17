import { Instrument } from "./Instrument";

export class Guitar extends Instrument{
        public play():void{
        console.log(`ดีด ${this.getName} เพื่อเล่นเพลง ${this.addMusic}`);
    }
}