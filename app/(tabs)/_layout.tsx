import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { Images } from "@/constants/images";
const TabIcon = ({ title, focused, icon }: any): React.JSX.Element => {
  if (focused) {
    return (
      <View className="flex flex-row flex-1 min-w-[90px] min-h-11 gap-2  bg-pink-300 rounded-xl px-2  w-full justify-center items-center overflow-hidden ">
        <Image source={Images} tintColor={"#151312"} className="size-5"></Image>
        <Text className="text-bold text-base font-semibold">{title}</Text>
      </View>
    );
  } else {
    return (
      <View className="flex flex-row flex-1 items-center justify-center min-w-[90px] min-h-11 gap-2">
        <Image
          source={require("@/assets/images/home.png")}
          tintColor={"#151312"}
          className="size-5"
        ></Image>
        <Text className="text-bold text-base font-semibold">{title}</Text>
      </View>
    );
  }
};
export default function Main() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={""} focused={focused} title="Home" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="search" focused={focused} title="search" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="profile" focused={focused} title="profile" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="saved" focused={focused} title="saved" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
