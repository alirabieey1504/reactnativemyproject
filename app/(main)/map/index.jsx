import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

export default function index() {
  return (
    <View>
        <Text>salam</Text>
      <MapView
        
        initialRegion={{
          latitude: 35.6892,
          longitude: 51.3890,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        // استفاده از OpenStreetMap
        provider={null} // برای OSM
        customMapStyle={[]}
      >
        <Marker
          coordinate={{ latitude: 35.6892, longitude: 51.3890 }}
          title="Tehran"
          description="Example Marker"
        />
      </MapView>
    </View>
  )
}

