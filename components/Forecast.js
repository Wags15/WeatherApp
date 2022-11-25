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

  const dailyData = [
    {
      dt: 1669305600,
      sunrise: 1669291996,
      sunset: 1669325542,
      moonrise: 1669295400,
      moonset: 1669326900,
      moon_phase: 0.03,
      temp: {
        day: 5.08,
        min: 0.65,
        max: 7.75,
        night: 6.74,
        eve: 7.34,
        morn: 0.76,
      },
      feels_like: { day: 2.01, night: 3.2, eve: 4.97, morn: -1.75 },
      pressure: 1025,
      humidity: 81,
      dew_point: 2.07,
      wind_speed: 5.76,
      wind_deg: 197,
      wind_gust: 9.92,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: 31,
      pop: 0,
      uvi: 1.33,
    },
    {
      dt: 1669392000,
      sunrise: 1669378470,
      sunset: 1669411904,
      moonrise: 1669386540,
      moonset: 1669416540,
      moon_phase: 0.07,
      temp: {
        day: 6.48,
        min: 1.07,
        max: 7.19,
        night: 1.07,
        eve: 4.75,
        morn: 6.99,
      },
      feels_like: { day: 2.26, night: -3.67, eve: 0.27, morn: 3.37 },
      pressure: 1008,
      humidity: 85,
      dew_point: 4.17,
      wind_speed: 8.11,
      wind_deg: 227,
      wind_gust: 12.91,
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 5.04,
      uvi: 0.35,
    },
    {
      dt: 1669478400,
      sunrise: 1669464944,
      sunset: 1669498269,
      moonrise: 1669476960,
      moonset: 1669506960,
      moon_phase: 0.1,
      temp: {
        day: 6.76,
        min: 0.32,
        max: 8.16,
        night: 7,
        eve: 7.89,
        morn: 0.52,
      },
      feels_like: { day: 2.51, night: 3.4, eve: 3.86, morn: -3.1 },
      pressure: 1014,
      humidity: 74,
      dew_point: 2.37,
      wind_speed: 8.87,
      wind_deg: 234,
      wind_gust: 16.15,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: 11,
      pop: 0,
      uvi: 1.55,
    },
    {
      dt: 1669564800,
      sunrise: 1669551416,
      sunset: 1669584636,
      moonrise: 1669566720,
      moonset: 1669597920,
      moon_phase: 0.14,
      temp: {
        day: 7.6,
        min: 6.4,
        max: 9.56,
        night: 9.56,
        eve: 6.4,
        morn: 7.43,
      },
      feels_like: { day: 4.98, night: 5.69, eve: 3.76, morn: 4.09 },
      pressure: 1006,
      humidity: 70,
      dew_point: 2.51,
      wind_speed: 9.72,
      wind_deg: 237,
      wind_gust: 17.16,
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 6.63,
      uvi: 0.4,
    },
    {
      dt: 1669651200,
      sunrise: 1669637887,
      sunset: 1669671005,
      moonrise: 1669655580,
      moonset: 1669689120,
      moon_phase: 0.18,
      temp: {
        day: 3.64,
        min: 2.12,
        max: 8.85,
        night: 2.12,
        eve: 4.24,
        morn: 8.14,
      },
      feels_like: { day: -0.52, night: -1.43, eve: 0.25, morn: 4.9 },
      pressure: 1003,
      humidity: 95,
      dew_point: 2.87,
      wind_speed: 6.48,
      wind_deg: 238,
      wind_gust: 12.88,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 4.88,
      uvi: 0.47,
    },
    {
      dt: 1669737600,
      sunrise: 1669724357,
      sunset: 1669757377,
      moonrise: 1669743900,
      moonset: 1669780260,
      moon_phase: 0.22,
      temp: {
        day: 1.11,
        min: 0.47,
        max: 2.52,
        night: 1.68,
        eve: 2.1,
        morn: 1.35,
      },
      feels_like: { day: -1.44, night: -1.97, eve: -0.67, morn: -1.76 },
      pressure: 1026,
      humidity: 64,
      dew_point: -4.94,
      wind_speed: 3.69,
      wind_deg: 85,
      wind_gust: 6.58,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: 61,
      pop: 0,
      uvi: 1,
    },
    {
      dt: 1669824000,
      sunrise: 1669810826,
      sunset: 1669843751,
      moonrise: 1669831860,
      moonset: 0,
      moon_phase: 0.25,
      temp: {
        day: 6.23,
        min: 2.24,
        max: 10.71,
        night: 10.24,
        eve: 8.07,
        morn: 3.87,
      },
      feels_like: { day: 1.17, night: 9.8, eve: 3.36, morn: -0.3 },
      pressure: 1013,
      humidity: 77,
      dew_point: 2.41,
      wind_speed: 12.93,
      wind_deg: 179,
      wind_gust: 22.02,
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 15.35,
      uvi: 1,
    },
    {
      dt: 1669910400,
      sunrise: 1669897294,
      sunset: 1669930127,
      moonrise: 1669919580,
      moonset: 1669871160,
      moon_phase: 0.29,
      temp: {
        day: 2.36,
        min: 0.95,
        max: 4.11,
        night: 2.13,
        eve: 3,
        morn: 1.51,
      },
      feels_like: { day: -4.5, night: -3.44, eve: -3.39, morn: -5.15 },
      pressure: 1010,
      humidity: 61,
      dew_point: -4.54,
      wind_speed: 12.37,
      wind_deg: 258,
      wind_gust: 19.87,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 16,
      pop: 1,
      rain: 2.64,
      uvi: 1,
    },
  ];

  //   Replace ^^^^ array with data.daily. For example: for elements in data.daily,

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
