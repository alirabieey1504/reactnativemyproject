import { View, Image, Text } from "react-native";
import React from "react";

const onboardingItem = ({ item }: any) => {
  return (
    <View className="bg-auth gap-10 flex flex-col justify-between">
      <View className="">
        <Image
          className=""
          width={300}
          height={100}
          source={item.imageSource}
        />
      </View>
      <View className="  text-black  rounded-t-[35px]">
        <Text className="relative w-96 text-red-500">{item.title}</Text>
        <Text className="relative w-96 text-red-400">{item.description}</Text>
      </View>
    </View>
  );
};

export default onboardingItem;
