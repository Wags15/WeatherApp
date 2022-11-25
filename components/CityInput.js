import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.opaque,
    marginTop: 50,
    height: 50,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  input: {
    color: colors.white,
    fontSize: 20,
    maxWidth: "90%",
  },
});

const CityInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter City' style={styles.input} />
    </View>
  );
};

export default CityInput;
