import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTIONS } from "../storageConfig";
import { dateGetAll } from "./dateGetAll";

export async function dateCreate(date: string) {
  try {
    const storedDate = await dateGetAll();

    const dateAlreadyExists = storedDate.includes(date);

    if (dateAlreadyExists) {
      return;
    }

    const storage = [date, ...storedDate];

    await AsyncStorage.setItem(DATE_COLLECTIONS, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
