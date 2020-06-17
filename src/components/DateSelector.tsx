import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type DateSelectorPropTypes = {
  currentDay: string;
  setDay: () => void;
  daysFrom: number;
};

export default function DateSelector({ currentDay, setDay, daysFrom }: DateSelectorPropTypes) {
  const forwardDisabled = daysFrom === 0;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDay(daysFrom - 1)}>
        <Ionicons name="ios-arrow-back" size={38} color="black" />
      </TouchableOpacity>
      <Text style={styles.dateText}>{currentDay}</Text>
      <TouchableOpacity disabled={forwardDisabled} onPress={() => setDay(daysFrom + 1)}>
        <Ionicons name="ios-arrow-forward" size={38} color={forwardDisabled ? "grey" : "black"} />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  dateText: {
    fontSize: 24,
    paddingHorizontal: 24,
  },
});
