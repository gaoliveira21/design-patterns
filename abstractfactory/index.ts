import { CountryRulesAbstractFactory } from "./factory/CountryRulesAbstractFactory";
import { BrazilianRulesAbstractFactory } from './factory/BrazilianRulesAbstractFactory'
import { USRulesAbstractFactory } from './factory/USRulesAbstractFactory'
import { IPhoneFactory } from "./factory/IPhoneFactory";

const brazilianRules: CountryRulesAbstractFactory = new BrazilianRulesAbstractFactory()
const usRules: CountryRulesAbstractFactory = new USRulesAbstractFactory()

const iphoneFactoryWithBrazilianRules: IPhoneFactory = new IPhoneFactory(brazilianRules)
const iphoneFactoryWithUSRules: IPhoneFactory = new IPhoneFactory(usRules)

console.log('### IPhoneXSMax')
iphoneFactoryWithBrazilianRules.orderIPhone('x', 'pro')

console.log('\n')

console.log('### IPhone11')
iphoneFactoryWithUSRules.orderIPhone('11', 'standard')