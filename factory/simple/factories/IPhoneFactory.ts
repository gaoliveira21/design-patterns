import { IPhone } from "../../models/IPhone";
import { IPhone11 } from "../../models/IPhone11";
import { IPhone11Pro } from "../../models/IPhone11Pro";
import { IPhoneX } from "../../models/IPhoneX";
import { IPhoneXSMax } from "../../models/IPhoneXSMax";

export class IPhoneFactory {
  public static orderIPhone(generation: 'x' | '11', level: 'standard' | 'pro'): IPhone {
    const devices = {
      x: {
        standard: new IPhoneX(),
        pro: new IPhoneXSMax()
      },
      11: {
        standard: new IPhone11(),
        pro: new IPhone11Pro()
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