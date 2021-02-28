import { IPhone } from './IPhone'

export class IPhoneX extends IPhone {

  public getHardware(): void {
    console.log("Hardware list");
		console.log("\t- 5.8in Screen");
		console.log("\t- A11 Chipset");
		console.log("\t- 3Gb RAM");
		console.log("\t- 256Gb Memory");
  }
}