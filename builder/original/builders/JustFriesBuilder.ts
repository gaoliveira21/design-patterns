import { FastFoodMealBuilder } from "./FastFoodMealBuider";

export class JustFriesBuilder extends FastFoodMealBuilder {
  public buildSide() {
    this.meal.setSide('Large fries')
  }
  
  public buildDrink() {}
  public buildMain() {}
  public buildDessert() {}
  public buildGift() {}
}