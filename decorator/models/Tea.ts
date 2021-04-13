import { Drink } from './Drink'

export class Tea implements Drink {
  public serve(): void {
    console.log('- Adding 100ml of tea')
  }

  public getPrice(): number {
    return 1
  }
}
