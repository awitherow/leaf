import { AsyncStorage, Alert } from "react-native";

import { EVENING_PROMPTS_KEYS } from "./strings";
import { getStorageDateString, getFormattedDateString } from "./dates";

export const savePrompt = async (key, text) => {
  const d = new Date();

  const dateString = getStorageDateString(d);

  try {
    await AsyncStorage.setItem(`@leaf:${dateString}:${key}`, text);
  } catch (error) {
    Alert.alert(
      "Error Saving Prompt",
      `There was an error saving your ${key} text, sorry...`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  }
};

export const getEveningAnswersFromStorage = async (d: Date) => {
  const eveningAnswers = {};

  const storeKeys = EVENING_PROMPTS_KEYS.map(
    (key) => `@leaf:${getStorageDateString(d)}:${key}`
  );

  const stores = await AsyncStorage.multiGet(storeKeys);
  stores.map(([key, value]) => (eveningAnswers[key.split(":")[2]] = value));

  return eveningAnswers;
};
