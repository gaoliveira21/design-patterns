import { Drink } from '../Drink'
import { DrinkDecorator } from './DrinkDecorator'

export class DoubleDrink extends DrinkDecorator {
  constructor(drink: Drink) {
    super(drink)
  }

  public serve(): void {
    this.drink.serve()
    this.drink.serve()
  }

  public getPrice(): number {
    return this.drink.getPrice() * 1.75
  }
}