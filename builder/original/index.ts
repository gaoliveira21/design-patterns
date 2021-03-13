import { FatMealBuilder } from "./builders/FatMealBuilder";
import { JustFriesBuilder } from "./builders/JustFriesBuilder";
import { MealDirector } from "./director/MealDirector";

const fatMealBuilder = new FatMealBuilder()
const justFriesMealBuilder = new JustFriesBuilder()

const fatMealDirector = new MealDirector(fatMealBuilder)
const justFriesDirector = new MealDirector(justFriesMealBuilder)

fatMealDirector.constructCombo()
justFriesDirector.constructCombo()

console.log(justFriesDirector.getMeal())
console.log(fatMealDirector.getMeal())
