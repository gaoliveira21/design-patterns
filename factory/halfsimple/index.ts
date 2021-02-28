import { IPhoneFactory } from './factories/IPhoneFactory'
import { IPhone11Factory } from './factories/IPhone11Factory'

const iphone11Factory: IPhoneFactory = new IPhone11Factory()

console.log('### IPhone11')
iphone11Factory.orderIPhone('standard')

console.log('\n')

console.log('### IPhone11Pro')
iphone11Factory.orderIPhone('pro')
