import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const FlexContainer = () => {
  return <View style={styles.container}></View>;
};

export default FlexContainer;
