import { Drink } from './Drink'

export class Expresso implements Drink {
  public serve(): void {
    console.log('- Adding 50ml of expresso')
  }

  public getPrice(): number {
    return 1.5
  }
}
