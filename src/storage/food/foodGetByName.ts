import { foodGetByDate } from "./foodGetByDate";

export async function foodGetByName(date: string, name: string) {
  try {
    const storedFoods = await foodGetByDate(date);

    const storage = storedFoods.filter((food) => food.name === name);

    const foods: FoodStorageDTO = storage[0];

    return foods;
  } catch (error) {
    throw error;
  }
}
