import { IPhoneFactory } from './factories/IPhoneFactory'

console.log('### IPhone11')
IPhoneFactory.orderIPhone('11', 'standard')

console.log('\n')

console.log('### IPhone11Pro')
IPhoneFactory.orderIPhone('11', 'pro')

console.log('\n')

console.log('### IPhoneX')
IPhoneFactory.orderIPhone('x', 'standard')

console.log('\n')

console.log('### IPhoneXSMax')
IPhoneFactory.orderIPhone('x', 'pro')