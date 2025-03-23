import { Appliance } from "./Appliance";

export class Refrigerator implements Appliance {
    private isOn: boolean = false;
    private doorOpen: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("ตู้เย็นเปิดแล้ว");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("ตู้เย็นปิดแล้ว");
    }

    openDoor(): void {
        if (this.isOn) {
            this.doorOpen = true;
            console.log("ประตูเปิด → ไฟติด");
        } else {
            console.log("กรุณาเปิดตู้เย็นก่อน");
        }
    }

    closeDoor(): void {
        if (this.isOn) {
            this.doorOpen = false;
            console.log("ประตูปิด → ไฟดับ");
        }
    }

    isDoorOpen(): boolean {
        return this.doorOpen;
    }
}