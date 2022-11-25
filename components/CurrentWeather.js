import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FlexContainer from "./containers/FlexContainer";
import { colors } from "./colors";
import Celsius from "./units/Celsius";
import SmallText from "./text/SmallText";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "90%",
  },
  city: {
    fontSize: "70em",
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 5,
    height: "30%",
  },
  temp: {
    fontSize: "50em",
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 5,
    fontWeight: "bold",
  },

  curTemps: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  feelsLike: {
    justifyContent: "center",
    alignItems: "center",
  },

  minMaxTemp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: colors.white,
    marginTop: "5%",
    flex: 1,
  },

  tempText: {
    color: colors.white,
    fontSize: 20,
    textShadowColor: colors.black,
    textShadowRadius: 5,
    fontWeight: "bold",
  },
});

const CurrentCity = ({ data, city }) => {
  return (
    <View style={styles.container}>
      {/* City Name */}
      <Text style={styles.city}>{city}</Text>

      {/* Current condition */}
      {data.current ? (
        <View
          style={{
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Icon for current condition */}
          <Image
            style={{ height: "50%", width: 85 }}
            source={{
              uri: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
            }}
          ></Image>

          {/* Current condition description */}
          <Text style={{ color: colors.white, fontSize: "15em" }}>
            <SmallText
              text={data.current.weather[0].main}
              color={colors.tertiary}
            />
          </Text>
        </View>
      ) : null}

      {/* Current temperatures (min, max, feels like, current temp) */}
      {data.current ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.curTemps}>
            <View style={styles.minMaxTemp}>
              {/* Min temperature */}
              <Text style={styles.tempText}>
                {Math.round(data.daily[0].temp.min)}°
              </Text>
              <SmallText text={"Min"} color={colors.tertiary} />
            </View>

            {/* Current Temperature */}
            <Text style={styles.temp}>{Math.round(data.current.temp)}°</Text>

            {/* Max temperature */}
            <View style={styles.minMaxTemp}>
              <Text style={styles.tempText}>
                {Math.round(data.daily[0].temp.max)}°
              </Text>
              <SmallText text={"Max"} color={colors.tertiary} />
            </View>
          </View>

          {/* Feels like */}
          <View style={styles.feelsLike}>
            <SmallText text={"Feels Like"} color={colors.tertiary} />
            <Text style={styles.tempText}>
              {Math.round(data.current.feels_like)}°
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CurrentCity;
