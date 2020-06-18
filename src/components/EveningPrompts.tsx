import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Panel from "./Panel";

import { EVENING_PROMPTS } from "../helpers/strings";
import { savePrompt, getEveningAnswersFromStorage } from "../helpers/storage";
import { datesAreOnSameDay } from "../helpers/dates";

type EveningPromptsPropTypes = {
  day: Date;
};

export default function EveningPrompts({ day }: EveningPromptsPropTypes) {
  const [prompts, setPrompts] = useState(null);

  useEffect(() => {
    getEveningAnswersFromStorage(day).then((data) => setPrompts(data));
  }, [day]);

  const PromptComponents = [];

  for (let [key, value] of Object.entries(EVENING_PROMPTS)) {
    PromptComponents.push(
      <View key={key} style={styles.prompt}>
        <Text style={styles.promptQuestion}>
          {EVENING_PROMPTS[key].question}
        </Text>
        <Text style={styles.promptDescription}>
          {EVENING_PROMPTS[key].description}
        </Text>
        <TextInput
          editable={datesAreOnSameDay(new Date(), day)}
          multiline
          style={styles.input}
          value={prompts ? prompts[key] : ""}
          onBlur={(e) => savePrompt(key, prompts[key])}
          onChangeText={(t) =>
            setPrompts({
              ...prompts,
              [key]: t,
            })
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Panel
        title={
          <View style={styles.header}>
            <FontAwesome name="moon-o" size={24} color="black" />
            <Text style={styles.headerText}>Evening Prompts</Text>
          </View>
        }
      >
        {!prompts ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          PromptComponents.map((Component) => Component)
        )}
      </Panel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  headerText: {
    fontSize: 20,
    paddingLeft: 8,
    fontWeight: "bold",
  },
  prompt: {
    marginBottom: 24,
  },
  promptQuestion: {
    fontSize: 18,
  },
  promptDescription: {
    fontStyle: "italic",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    marginTop: 8,
    fontSize: 16,
    padding: 8,
  },
});
