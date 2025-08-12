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
  const imagesource = Images[icon] || Images.home;
  if (focused) {
    return (
      <View className="flex flex-row flex-1 min-w-[90px] min-h-11 gap-2  bg-pink-300 rounded-xl px-2  w-full justify-center items-center overflow-hidden ">
        <Image
          source={imagesource}
          tintColor={"#151312"}
          className="size-5"
        ></Image>
        <Text className="text-bold text-base font-semibold">{title}</Text>
      </View>
    );
  } else {
    return (
      <View className="flex flex-row flex-1 items-center justify-center min-w-[90px] min-h-11 gap-2">
        <Image
          source={imagesource}
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
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 20,
          marginBottom: 40,
          marginRight: 20,
          marginLeft: 20,
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
