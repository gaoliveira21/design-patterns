import { IPhone } from "../../models/IPhone";

export abstract class IPhoneFactory {
  public orderIPhone(): IPhone {
    const device: IPhone = this.createIPhone()

    device.getHardware()
		device.assemble()
		device.certificates()
		device.pack()

    return device
  }

  protected abstract createIPhone(): IPhone
}