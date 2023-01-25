import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTIONS } from "../storageConfig";
import { foodGetByDate } from "./foodGetByDate";

export async function foodUpdate(
  date: string,
  name: string,
  food: FoodStorageDTO
) {
  try {
    const storedFood = await foodGetByDate(date);

    const foodFilter = storedFood.filter((value) => value.name !== name);

    const storage = [...foodFilter, food];

    await AsyncStorage.setItem(
      `${FOOD_COLLECTIONS}-${food.date}`,
      JSON.stringify(storage)
    );
  } catch (error) {
    throw error;
  }
}
