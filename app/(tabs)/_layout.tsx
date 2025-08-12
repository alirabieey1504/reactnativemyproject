import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = () => {
  return (
    <View className="flex flex-row flex-1 min-w-[90px] min-h-11 gap-2  bg-pink-300 rounded-xl px-2  w-full justify-center items-center overflow-hidden ">
      <Image
        source={require("@/assets/images/home.png")}
        tintColor={"#151312"}
        className="size-5"
      ></Image>
      <Text className="text-bold text-base font-semibold">home</Text>
    </View>
  );
};
export default function Main() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon />,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
