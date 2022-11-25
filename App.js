import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import First from "./pages/First";
import { colors } from "./components/colors";
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <First></First>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
