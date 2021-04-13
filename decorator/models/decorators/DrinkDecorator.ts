import { Drink } from '../Drink'

export abstract class DrinkDecorator implements Drink {
  constructor(
    protected drink: Drink
  ) { }

  abstract serve(): void
  abstract getPrice(): number
}