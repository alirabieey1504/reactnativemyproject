import {  BackHandler, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { WebView } from 'react-native-webview';
import searchBar from '../../../components/SearchBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messages from '../../../components/messages'
import support from '../../../components/support'
import React, { useRef } from 'react';
const Tab=createBottomTabNavigator()
const Stack = createNativeStackNavigator();
 function Map() {
  const webviewRef=useRef(null)

  React.useEffect(()=>{
   
   const backAction=()=>{

    if(webviewRef.current){
      webviewRef.current.injectJavaScript(`window.resetSelection();true;`)
      console.log('work');
      return true
    }
    return false
   }


   const backHandle= BackHandler.addEventListener('hardwareBackPress',backAction)
    return ()=> backHandle.remove()
  },[])

  const handleMessage=(event)=>{
    console.log('this is test');
    console.log(JSON.parse(event.nativeEvent.data),'this is data');
  }
  return (
    <>
    <View className='flex flex-1' >
    <WebView  
    ref={webviewRef}
       originWhitelist={['*']} source={require('../../map.html')}
        style={{ flex: 1 }} onMessage={handleMessage}
        onLoad={console.log('this load for')} />
      
    </View>
    </>

  )
}
function turnOn(){
  return(
   <Text>hello</Text>
  )
}

export default function nav(){
  return(
      <Tab.Navigator initialRouteName='خانه'>
        <Tab.Screen name='پشتیبانی' options={{headerShown:false}} component={searchBar} ></Tab.Screen>
        <Tab.Screen  name='طرح تشویقی' options={{headerShown:false}} component={support} ></Tab.Screen>
       
        <Tab.Screen 
         name='turnon' options={{headerShown:false ,tabBarLabel:()=>null,tabBarIcon:({color,size})=>(
            <Ionicons className='mt-1' name='power' size={size} color={color} />
         )}}component={Map} ></Tab.Screen>

        <Tab.Screen name='پیام ها' options={{headerShown:false}} component={messages} ></Tab.Screen>
        <Tab.Screen options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name='home' size={size} color={color} />
          ),headerShown:false
        }}  name='خانه'  component={Map} ></Tab.Screen>
      </Tab.Navigator>
  )
}

