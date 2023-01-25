import AsyncStorage from "@react-native-async-storage/async-storage";

import { dateGetAll } from "@storage/date/dateGetAll";
import { FOOD_COLLECTIONS } from "@storage/storageConfig";

async function getAllKeys() {
  try {
    const storedDates = await dateGetAll();
    const keys = storedDates.map(
      (storedDate) => `${FOOD_COLLECTIONS}-${storedDate}`
    );
    return keys;
  } catch (error) {
    throw error;
  }
}

export async function foodGetAll() {
  try {
    const keys = await getAllKeys();

    let foods: FoodStorageDTO[] = [];

    await AsyncStorage.multiGet(keys, (err, items) => {
      items?.map((result, index, store) => {
        const storage = store[index][1];
        const storedFood = storage ? JSON.parse(storage) : [];
        storedFood.map((food: FoodStorageDTO) => foods.unshift(food));
      });
    });

    return foods;
  } catch (error) {
    throw error;
  }
}
