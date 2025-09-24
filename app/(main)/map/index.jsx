import {  Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, UrlTile ,PROVIDER_DEFAULT} from 'react-native-maps'
import { WebView } from 'react-native-webview';
export default function map() {
  return (
    <View className='flex flex-1 mt-10' >
{/* 
<MapView
  style={{ flex: 1 }}
   provider={PROVIDER_DEFAULT}
  initialRegion={{
    latitude: 35.6892,
    longitude: 51.3890,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <UrlTile
    urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    maximumZ={19}
  />
    <Marker
          coordinate={{ latitude: 35.6892, longitude: 51.3890 }}
          title="تهران"
        />
</MapView> */}
    <WebView source={{ uri: 'https://www.openstreetmap.org/#map=6/32.72/53.68' }}
        style={{ flex: 1 }} />
    <Text className='mt-10'>salam</Text>
    </View>
  )
}

