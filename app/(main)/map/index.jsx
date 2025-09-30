import {  Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { WebView } from 'react-native-webview';
import searchBar from '../../../components/SearchBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import messages from '../../../components/messages'
import support from '../../../components/support'
const Tab=createBottomTabNavigator()
const Stack = createNativeStackNavigator();
 function map() {
  return (
    <>
    <View className='flex flex-1' >
    <WebView  originWhitelist={['*']} source={require('../../map.html')}
        style={{ flex: 1 }} />

    </View>
    </>

  )
}

export default function nav(){
  return(
      <Tab.Navigator screenOptions={({route})=>({tabBarIcon:({color,size})=>{
       <Ionicons name='home' size={size} color={color} />
      }})}>
        <Tab.Screen name='پشتیبانی' options={{headerShown:false}} component={searchBar} ></Tab.Screen>
        <Tab.Screen  name='طرح تشویقی' options={{headerShown:false}} component={support} ></Tab.Screen>
        <Tab.Screen  name='پیام ها' options={{headerShown:false}} component={messages} ></Tab.Screen>
        <Tab.Screen options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name='home' size={size} color={color} />
          ),headerShown:false
        }}  name='خانه'  component={map} ></Tab.Screen>
      </Tab.Navigator>
  )
}

