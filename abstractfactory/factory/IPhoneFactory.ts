import { IPhone } from "../models/phones/IPhone";
import { IPhone11 } from "../models/phones/IPhone11";
import { IPhone11Pro } from "../models/phones/IPhone11Pro";
import { IPhoneX } from "../models/phones/IPhoneX";
import { IPhoneXSMax } from "../models/phones/IPhoneXSMax";
import { CountryRulesAbstractFactory } from "./CountryRulesAbstractFactory";

export class IPhoneFactory {
  constructor(private rules: CountryRulesAbstractFactory) {}

  public orderIPhone(generation: 'x' | '11', level: 'standard' | 'pro'): IPhone {
    const devices = {
      x: {
        standard: new IPhoneX(this.rules),
        pro: new IPhoneXSMax(this.rules)
      },
      11: {
        standard: new IPhone11(this.rules),
        pro: new IPhone11Pro(this.rules)
      }
    }

    let device: IPhone = devices[generation][level];

    device.getHardware()
		device.assemble()
		device.certificates()
		device.pack()

    return device
  }
}