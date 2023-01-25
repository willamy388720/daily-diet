import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTIONS } from "../storageConfig";

export async function foodGetByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(`${FOOD_COLLECTIONS}-${date}`);

    const foods: FoodStorageDTO[] = storage ? JSON.parse(storage) : [];

    return foods;
  } catch (error) {
    throw error;
  }
}
