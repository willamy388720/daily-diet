import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTIONS } from "../storageConfig";
import { AppError } from "@utils/AppError";
import { foodGetByDate } from "./foodGetByDate";

export async function foodCreate(food: FoodStorageDTO) {
  try {
    const storedFood = await foodGetByDate(food.date);

    const foodAlreadyExists = storedFood.filter(
      (value) => value.name === food.name
    );

    if (foodAlreadyExists.length > 0) {
      throw new AppError("Essa refeição já existe nessa dieta");
    }

    const storage = [food, ...storedFood];

    await AsyncStorage.setItem(
      `${FOOD_COLLECTIONS}-${food.date}`,
      JSON.stringify(storage)
    );
  } catch (error) {
    throw error;
  }
}
