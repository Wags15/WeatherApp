import React from "react";
import { Text } from "react-native";

export default function BoldText({ text, color }) {
  return <Text style={{ color: color, fontWeight: "bold" }}>{text}</Text>;
}
