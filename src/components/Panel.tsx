import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Panel({ title, children }) {
  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const [expanded, setExpanded] = useState(false);

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        {title}
        <TouchableOpacity onPress={changeLayout}>
          <>
            <AntDesign
              name={expanded ? "up" : "down"}
              size={24}
              color="black"
            />
          </>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: expanded ? null : 0,
          overflow: "scroll",
        }}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
