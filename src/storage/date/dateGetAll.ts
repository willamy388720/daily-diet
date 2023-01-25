import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTIONS } from "../storageConfig";

export async function dateGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTIONS);

    const dates: string[] = storage ? JSON.parse(storage) : [];

    return dates;
  } catch (error) {
    throw error;
  }
}
