import { IPhone } from "../../models/IPhone";
import { IPhone11 } from "../../models/IPhone11";
import { IPhone11Pro } from "../../models/IPhone11Pro";
import { IPhoneFactory } from "./IPhoneFactory";

export class IPhone11Factory extends IPhoneFactory {
  public createIPhone(level: 'standard' | 'pro'): IPhone {
    switch (level) {
      case 'standard':
        return new IPhone11()
      
      case 'pro':
        return new IPhone11Pro()
      
      default:
        return new IPhone11()
    }
  }
}