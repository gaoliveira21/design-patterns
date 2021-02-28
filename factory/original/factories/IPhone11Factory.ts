import { IPhone } from "../../models/IPhone";
import { IPhone11 } from "../../models/IPhone11";
import { IPhoneFactory } from "./IPhoneFactory";

export class IPhone11Factory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhone11()
  }
}