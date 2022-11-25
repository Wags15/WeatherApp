import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "./colors";
import Celsius from "./units/Celsius";
import SmallText from "./text/SmallText";

export default function MinMax({ data }) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 80,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: colors.opaque,
      borderRadius: 10,
      marginTop: "5%",
    },

    element: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 20,
      marginRight: 20,
      height: "90%",
      width: "33.3333%",
    },

    botText: {
      color: colors.tertiary,
      fontSize: "15em",
      fontWeight: "bold",
    },

    topText: {
      color: colors.white,
      fontSize: "30em",
      fontWeight: "bold",
    },
  });
  const [prec, setPrec] = useState(0);

  return (
    <View>
      {data.current ? (
        <View style={styles.container}>
          {/* Wind speed */}
          <View style={styles.element}>
            <Text style={styles.topText}>
              {Math.round(data.current.wind_speed)}
              <SmallText text={"km/h"} color={colors.white} />
            </Text>
            <Text style={styles.botText}>Wind Speed</Text>
          </View>

          {/* Precipitation */}
          <View style={styles.element}>
            <Text style={styles.topText}>
              {Math.round(data.minutely[0].precipitation)}
              <SmallText text={"mm"} color={colors.white} />
            </Text>
            <Text style={styles.botText}>Precipitation</Text>
          </View>

          {/* Humidity */}
          <View style={styles.element}>
            <Text style={styles.topText}>
              {Math.round(data.current.humidity)}
              <SmallText text={"%"} color={colors.white} />
            </Text>
            <Text style={styles.botText}>Humidity</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
