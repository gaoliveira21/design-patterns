import { FastFoodMeal } from "../../models/FastFoodMeal";
import { FastFoodMealBuilder } from "../builders/FastFoodMealBuider";

export class MealDirector {
  constructor(
    private builder: FastFoodMealBuilder
  ) { }

  public constructCombo(): void {
    this.builder.buildDrink()
    this.builder.buildMain()
    this.builder.buildSide()
    this.builder.buildDessert()
    this.builder.buildGift()
  }

  public getMeal(): FastFoodMeal {
    return this.builder.getMeal()
  }
}