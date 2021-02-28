import { IPhone } from '../../models/IPhone'
import { IPhone11Pro } from '../../models/IPhone11Pro'
import { IPhoneFactory } from './IPhoneFactory'

export class IPhone11ProFactory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhone11Pro()
  }
}
