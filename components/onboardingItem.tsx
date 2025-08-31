import { View, Image, Text } from "react-native";
import React from "react";

const onboardingItem = ({ item }: any) => {
  return (
    <View className="pt-20">
      <Text className="w-96 mt-40  text-red-300">{item.id}</Text>
      <Text className="w-96 text-red-500">{item.title}</Text>
      <Text className="w-96 text-black">{item.description}</Text>
      <Image source={item.imageSource} />
    </View>
  );
};

export default onboardingItem;
