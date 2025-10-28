import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

import MapLibreGL from "@maplibre/maplibre-react-native";

const PARDISAN_COORDINATES = [51.356616419024135, 35.74441960479204];

MapLibreGL.setAccessToken(null);

MapLibreGL.addCustomHeader("x-api-key", "YOUR_MAP_IR_API_KEY");

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#F5FCFF",
  },

  map: {
    flex: 1,

    alignSelf: "stretch",
  },

  messageBackground: {
    backgroundColor: "white",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    width: 64,

    padding: 3,
  },

  messageText: {
    color: "black",

    fontSize: 16,
  },
});

const Message = ({ message }: any) => {
  return (
    <View style={styles.messageBackground}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default function support() {
  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        // choose your map style from https://help.map.ir/documentation/styles/

        mapStyle="https://map.ir/vector/styles/main/mapir-Dove-style.json"
      >
        <MapLibreGL.Camera
          defaultSettings={{
            centerCoordinate: PARDISAN_COORDINATES,

            zoomLevel: 7,
          }}
        />

        <MapLibreGL.MarkerView
          id="message\_id"
          coordinate={PARDISAN_COORDINATES}
        >
          <Message message="Map.ir" />
        </MapLibreGL.MarkerView>
      </MapLibreGL.MapView>
    </View>
  );
}
