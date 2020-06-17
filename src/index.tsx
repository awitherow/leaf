import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import DateSelector from "./components/DateSelector";

import { getFormattedDateString, calculateDay } from "./helpers/dates";

export default function Main() {
  const [daysFromCurrentDate, setDaysFromCurrentDate] = useState(0);

  const today = new Date();
  const daySelected = calculateDay(today, daysFromCurrentDate);
  const currentDay = getFormattedDateString(daySelected);

  return (
    <SafeAreaView style={styles.container}>
      <DateSelector currentDay={currentDay} setDay={setDaysFromCurrentDate} daysFrom={daysFromCurrentDate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
