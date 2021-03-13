import { FastFoodMeal } from "../../models/FastFoodMeal";

export abstract class FastFoodMealBuilder {
  constructor(
    protected meal: FastFoodMeal = new FastFoodMeal()
  ){}

  public getMeal(): FastFoodMeal {
    return this.meal
  }

  public abstract buildDrink(): void
  public abstract buildMain(): void
  public abstract buildSide(): void
  public abstract buildDessert(): void
  public abstract buildGift(): void
}