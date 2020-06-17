import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";

import DateSelector from "./components/DateSelector";
import EveningPrompts from "./components/EveningPrompts";
import DismissKeyboard from "./components/DismissKeyboard";

import { getFormattedDateString, calculateDay } from "./helpers/dates";

export default function Main() {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) =>
        console.log({ [store[i][0]]: store[i][1] })
      );
    });
  });

  const [daysFromCurrentDate, setDaysFromCurrentDate] = useState(0);

  const today = new Date();
  const daySelected = calculateDay(today, daysFromCurrentDate);
  const currentDay = getFormattedDateString(daySelected);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <DateSelector
          currentDay={currentDay}
          setDay={setDaysFromCurrentDate}
          daysFrom={daysFromCurrentDate}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <EveningPrompts day={daySelected} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
