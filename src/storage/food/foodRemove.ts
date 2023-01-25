import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTIONS } from "../storageConfig";
import { foodGetByDate } from "./foodGetByDate";

export async function foodRemove(date: string, name: string) {
  try {
    const storedFood = await foodGetByDate(date);

    const foodFilter = storedFood.filter((value) => value.name !== name);

    const storage = [...foodFilter];

    await AsyncStorage.setItem(
      `${FOOD_COLLECTIONS}-${date}`,
      JSON.stringify(storage)
    );
  } catch (error) {
    throw error;
  }
}
