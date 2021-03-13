import { FastFoodMealBuilder } from "./builders/FastFoodMealBuilder";

const burguerCombo = 
  new FastFoodMealBuilder('Fries')
    .andMain('CheeseBurger')
    .forDrink('Coke')
    .thatsAll()


console.log(burguerCombo)