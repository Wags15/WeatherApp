import React from "react";
import { Text } from "react-native";

export default function SmallText({ text, color }) {
  return (
    <Text style={{ color: color, fontSize: "15em", fontWeight: "bold" }}>
      {text}
    </Text>
  );
}
