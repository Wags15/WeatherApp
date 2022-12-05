import { StyleSheet, Text, View, TextInput } from "react-native";

import CurrentCity from "../components/CurrentWeather";
import MinMax from "../components/OtherStats";
import Forecast from "../components/Forecast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { colors } from "../components/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
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
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingMessage: {
    width: "40%",
    height: "50%",
    backgroundColor: colors.opaque,
  },
});

export default function First() {
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [getData, setGetData] = useState(false);

  // Enter your api key here
  const ID = "";

  //   Get current time in UNIX time (unit used for API calls)
  let start = Math.floor(new Date().getTime() / 1000);

  //   Use mod to strip the start date to a single day before accounting for the next 7 days
  //   After mod, start will represent the start of the current day, then add 604800 because that is how many seconds are in 7 days.
  //   Used so that the forecast represents the entire day, not half a day for example
  let end = Math.floor((start % 86400) + 604800);

  //   Keeps track of what the user enters
  const [location, setLocation] = useState("");
  //   The name of the city to be displayed once it is entered
  const [city, setCity] = useState("");

  //   API call for weather stats
  var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${ID}&units=metric`;

  //   API call to get lat and lon for a given city
  var geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location},ca&appid=32910035448ac29ba519a8622cd8c3b8`;

  async function searchLocation() {
    await axios
      .get(geocodingUrl)
      .then((response) => {
        if (response.data) {
          setLat(response.data[0].lat);
          setLon(response.data[0].lon);
          setGetData(!getData);
        }
      })
      //   If it cannot find the city, set data to empty, reset city and location fields, log the error
      .catch((error) => {
        setData({});
        setCity("");
        setLocation("");
        console.log(error);
      });
  }

  // Once getData is updated, it is ready to search
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Update the data
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Update the city name to be displayed
    setCity(location);
    // Set location to blank so search bar clears
    setLocation("");
  }, [getData]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter City'
          style={styles.input}
          value={location}
          keyboardType='text'
          onChangeText={(text) => setLocation(text)}
          returnKeyType='done'
          onSubmitEditing={searchLocation}
        />
      </View>
      {!data.current ? (
        <Text style={{ color: "red" }}>Please Enter A Valid Canadian City</Text>
      ) : null}
      <CurrentCity data={data} city={city} />
      <MinMax data={data} />
      <Forecast data={data} />
    </View>
  );
}
