import { Images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type iconName = keyof typeof Images;

type typeIcon = {
  title: string;
  focused: boolean;
  icon: iconName;
};
const TabIcon = ({ title, focused, icon }: typeIcon): React.JSX.Element => {
  const imageIcon = Images[icon] || Images.home;
  if (focused) {
    return (
      <View className="flex flex-row flex-1  mt-4 min-w-[88px] min-h-12 gap-2  bg-pink-300 rounded-full px-2  w-full justify-center items-center overflow-hidden ">
        <Image
          source={imageIcon}
          tintColor={"#151312"}
          className="size-5"
        ></Image>
        <Text className="text-bold text-base font-semibold">{title}</Text>
      </View>
    );
  } else {
    return (
      <View className="flex rounded-xl flex-1 items-center justify-center mt-4 min-w-[88px] min-h-12 gap-2">
        <Image
          source={imageIcon}
          tintColor={"#ffff"}
          className="size-5 "
        ></Image>
      </View>
    );
  }
};
export default function Main() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 20,
          marginBottom: 40,
          marginRight: 10,
          marginLeft: 10,
          height: 40,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={"home"} focused={focused} title="Home" />
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
            <TabIcon icon="save" focused={focused} title="saved" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
