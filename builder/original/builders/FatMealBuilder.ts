import { FastFoodMealBuilder } from "./FastFoodMealBuider";

export class FatMealBuilder extends FastFoodMealBuilder {
  public buildDrink() {
    this.meal.setDrink('MilkShake')
  }

  public buildMain() {
    this.meal.setMain('TripleCheddarBaconBurguer')
  }

  public buildSide() {
    this.meal.setSide('Onion Rings')
  }

  public buildDessert() {
    this.meal.setDessert('Large IceCream')
  }
  public buildGift() {
    this.meal.setGift('Hospital pass')
  }
}