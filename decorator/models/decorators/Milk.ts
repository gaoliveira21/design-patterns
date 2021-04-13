import { Drink } from '../Drink'
import { DrinkDecorator } from './DrinkDecorator'

export class Milk extends DrinkDecorator {
  constructor(drink: Drink) {
    super(drink)
  }

  public serve(): void {
    this.drink.serve()
    console.log('- Adding 30ml of Milk')
  }

  public getPrice(): number {
    return this.getPrice() + 0.5
  }
}