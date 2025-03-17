import { Aircraft } from "./Aircraft.ts/Aircraft";
import { Airplane } from "./Aircraft.ts/Airplane";
import { Helicopter } from "./Aircraft.ts/Helicopter";
import { Coffee } from "./drink/Coffee";
import { Juice } from "./drink/Juice";
import { Dolphin } from "./fish/Dolphin";
import { Shark } from "./fish/Shark";
import { Food } from "./Food/Food";
import { Pizza } from "./Food/Pizza";
import { Sushi } from "./Food/Sushi";
import { Guitar } from "./Instrument.ts/Guitar";
import { EmailNotification } from "./Notification/EmailNotification";

const dolphin1 = new Dolphin("โลมาปากขวด")
dolphin1.action();

const shark1 = new Shark("ฉลามเสือทราย")
shark1.action();

console.log("==================================================================================");

const coffee1 = new Coffee("กาแฟ")
coffee1.addMilk();
coffee1.serve();

const juice1 =  new Juice("น้ำเเตงโม")
juice1.smoothie();
juice1.serve();

console.log("==================================================================================");

const Airplane1 = new Airplane("เครื่องบินการบินไทย",321)
Airplane1.fly();

console.log("==================================================================================");

// const Guitar1 = new Guitar("กีตาร์ไฟฟ้า")
// Guitar1.play();

console.log("==================================================================================");

const pizza1 = new Pizza("Hawaiian Pizza")
pizza1.addTopping();
pizza1.Thickdough();
pizza1.serve();

const sushi1 = new Sushi("ซูชิแซลมอน")
sushi1.littelRice();
sushi1.addWasabi();
sushi1.serve();

console.log("==================================================================================");

const email = new EmailNotification("Test1@gmail.com")
email.sent("");