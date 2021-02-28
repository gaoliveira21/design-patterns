import { IPhone11Factory } from './factories/IPhone11Factory'
import { IPhone11ProFactory } from './factories/IPhone11ProFactory'
import { IPhoneFactory } from './factories/IPhoneFactory'

const iphone11Factory: IPhoneFactory = new IPhone11Factory()
const iphone11ProFactory: IPhoneFactory = new IPhone11ProFactory()

console.log("### IPhone11")
iphone11Factory.orderIPhone()

console.log("\n")

console.log("### IPhone11Pro")
iphone11ProFactory.orderIPhone()
