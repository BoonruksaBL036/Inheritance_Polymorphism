import { Fish } from "./Fish";

export class Shark extends Fish {
    public action(): void {
        console.log(`${this.getSpecies() } : กำลังไล่ล่า`);  
    }

}