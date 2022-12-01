import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "./colors";
import BoldText from "./text/BoldText";
import FlexContainer from "./containers/FlexContainer";
import SmallText from "./text/SmallText";
import Celsius from "./units/Celsius";

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "85%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    flex: 2,
  },

  topText: {
    fontSize: "20em",
    fontWeight: "bold",
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  forecast: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.secondaryOpaque,
    borderWidth: 2,
    borderColor: colors.tertiary,
    borderRadius: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  even: {
    backgroundColor: colors.opaque,
    width: "90%",
    height: "10%",
    marginBottom: "1%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  odd: {
    backgroundColor: colors.secondaryOpaque,
    width: "90%",
    height: "10%",
    marginBottom: "1%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  day: {
    fontSize: "15em",
    color: colors.white,
    fontWeight: "bold",
    textShadowColor: colors.black,
    textShadowRadius: 2,
  },
  stats: {
    flex: 3,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    color: colors.tertiary,
    fontSize: "10em",
    fontWeight: "bold",
  },
  smallText: {
    fontSize: "10em",
  },
  smallerText: {
    fontSize: "7em",
  },
  condition: {
    flex: 2,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
});

export default function Forecast({ data }) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const d = new Date();
  // Save current date in int representation. Used later to display 7-day forecast
  let curDay = d.getDay();

  return (
    <View style={styles.container}>
      {data.daily ? (
        <View style={styles.innerContainer}>
          <View style={styles.forecast}>
            <Text style={styles.topText}>7-Day Forecast</Text>
            {/* // Change this to data.daily.map......... */}
            {data.daily.map((element, index) => (
              <View
                style={index % 2 === 0 ? styles.even : styles.odd}
                key={index}
              >
                <View
                  style={{
                    flex: 2,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.day}>
                    {index === 0 ? "Today" : weekdays[(index + curDay) % 7]}
                  </Text>
                </View>

                <View style={styles.stats}>
                  <View>
                    {/* The low for the day */}
                    <View style={styles.statContainer}>
                      <Text style={styles.header}>L: </Text>
                      <Text style={styles.smallText}>
                        {Math.round(element.temp.min)}°
                      </Text>
                    </View>
                    {/* The high for the day */}
                    <View style={styles.statContainer}>
                      <Text style={styles.header}>H: </Text>
                      <Text style={styles.smallText}>
                        {Math.round(element.temp.max)}°
                      </Text>
                    </View>
                  </View>

                  <View>
                    {/* The low for the day */}
                    <View style={styles.statContainer}>
                      <Text style={styles.header}>Wind: </Text>
                      <Text style={styles.smallText}>
                        {Math.round(element.wind_speed)}
                      </Text>
                      <Text style={styles.smallerText}>km/h</Text>
                    </View>
                    {/* The humidity for the day */}
                    <View style={styles.statContainer}>
                      <Text style={styles.header}>Hum: </Text>
                      <Text style={styles.smallText}>
                        {Math.round(element.humidity)}
                      </Text>
                      <Text style={styles.smallerText}>%</Text>
                    </View>
                  </View>
                </View>

                {/* The weather condition (icon only) and precipitation if raining/snowing */}
                <View style={styles.condition}>
                  <Image
                    style={{ height: "60%", width: "50%" }}
                    source={{
                      uri: `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
                    }}
                  ></Image>
                  {element.rain > 0.9 ? (
                    <Text style={styles.smallerText}>
                      {Math.round(element.rain)}mm
                    </Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}
