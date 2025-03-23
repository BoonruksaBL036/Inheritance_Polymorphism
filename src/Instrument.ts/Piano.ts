import { Instrument } from "./Instrument";

export class Piano extends Instrument{
        public play():void{
        console.log(`กด ${this.getName()} เพื่อเล่นเพลง ${this.addMusic()}`);
    }
}