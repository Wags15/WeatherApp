import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

const MainContainer = () => {
  return <View style={styles.container}></View>;
};

export default MainContainer;
