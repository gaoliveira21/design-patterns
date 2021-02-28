import { IPhone } from './IPhone'

export class IPhoneXSMax extends IPhone {

  public getHardware(): void {
    console.log("Hardware list");
		console.log("\t- 6.5in Screen");
		console.log("\t- A12 Chipset");
		console.log("\t- 4Gb RAM");
		console.log("\t- 512Gb Memory");
  }
}