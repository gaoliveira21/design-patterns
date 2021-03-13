import { FastFoodMeal } from "../../models/FastFoodMeal";

export class FastFoodMealBuilder {
  //Optionals
  private drink: string = '';
  private main: string = '';
  private dessert: string = '';
  private gift: string = '';

  constructor(
    private side: string,
  ) { }

  public forDrink(drink: string): FastFoodMealBuilder {
    this.drink = drink
    return this
  }

  public andMain(main: string): FastFoodMealBuilder {
    this.main = main
    return this
  }

  public andDessert(dessert: string): FastFoodMealBuilder {
    this.dessert = dessert
    return this
  }

  public andGift(gift: string): FastFoodMealBuilder {
    this.gift = gift
    return this
  }

  public thatsAll(): FastFoodMeal {
    return new FastFoodMeal(this.drink, this.main, this.side, this.dessert, this.gift)
  }
}