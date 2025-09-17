import { View, Image, Text } from "react-native";
import React from "react";

const onboardingItem = ({ item }: any) => {
  console.log(item, "this is item");
  return (
    <View className="pt-20 bg-auth">
      <Text className="w-96 mt-40  text-red-300">{item.id}</Text>
      <Text className="w-96 text-red-500">{item.title}</Text>
      <Text className="w-96 text-black">{item.description}</Text>
      <Image
        className="h-"
        width={300}
        height={100}
        source={item.imageSource}
      />
    </View>
  );
};

export default onboardingItem;
