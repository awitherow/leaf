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

export const getEveningAnswersFromStorage = (d: Date) => {
  const eveningAnswers = {};

  EVENING_PROMPTS_KEYS.map(async (key) => {
    try {
      const result = await AsyncStorage.getItem(
        `@leaf:${getStorageDateString(d)}:${key}`
      );

      eveningAnswers[key] = result ? result : "";
    } catch (error) {
      Alert.alert(
        "Error Loading prompts",
        `There was an error loading prompts for ${getFormattedDateString(
          d
        )} your ${d}, sorry...`,
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  });

  return eveningAnswers;
};
