import { DoubleDrink } from './models/decorators/DoubleDrink'
import { Milk } from './models/decorators/Milk'
import { Expresso } from './models/Expresso'
import { Tea } from './models/Tea'

const tea = new Tea()
tea.serve()
console.log('Tea price: ', tea.getPrice())

console.log('----------------------------')

const expresso = new Expresso()
expresso.serve()
console.log('Expresso price: ', expresso.getPrice())

console.log('----------------------------')

const teaWithMilk = new Milk(tea)
teaWithMilk.serve()
console.log('Tea with milk price: ', teaWithMilk.getPrice())

console.log('----------------------------')

const expressoWithMilk = new Milk(expresso)
expressoWithMilk.serve()
console.log('Expresso with milk price: ', expressoWithMilk.getPrice())

console.log('----------------------------')

const doubleTea = new DoubleDrink(tea)
doubleTea.serve()
console.log('Double tea price: ', doubleTea.getPrice())

console.log('----------------------------')

const doubleExpressoWithMilk = new DoubleDrink(expressoWithMilk)
doubleExpressoWithMilk.serve()
console.log('Double expresso with milk price: ', doubleExpressoWithMilk.getPrice())
