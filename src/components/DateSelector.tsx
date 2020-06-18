import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type DateSelectorPropTypes = {
  currentDay: string;
  setDay: () => void;
  daysFrom: number;
};

export default function DateSelector({
  currentDay,
  setDay,
  daysFrom,
}: DateSelectorPropTypes) {
  const forwardDisabled = daysFrom === 0;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDay(daysFrom - 1)}>
        <AntDesign name="left" size={38} color="black" />
      </TouchableOpacity>
      <Text style={styles.dateText}>{currentDay}</Text>
      <TouchableOpacity
        disabled={forwardDisabled}
        onPress={() => setDay(daysFrom + 1)}
      >
        <AntDesign
          name="right"
          size={38}
          color={forwardDisabled ? "grey" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width,
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
