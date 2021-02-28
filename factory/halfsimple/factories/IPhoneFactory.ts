import { IPhone } from "../../models/IPhone";

export abstract class IPhoneFactory {
  public orderIPhone(level: 'standard' | 'pro'): IPhone {
    const device: IPhone = this.createIPhone(level)

    device.getHardware()
		device.assemble()
		device.certificates()
		device.pack()

    return device
  }

  protected abstract createIPhone(level: 'standard' | 'pro'): IPhone
}