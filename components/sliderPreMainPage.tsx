import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import data from "@/data";
import OnboardingItem from "./onboardingItem";
const SliderPreMainPage = () => {
  const { width } = Dimensions.get("window");
  console.log(width, "this is width");
  return (
    <View className="">
      <FlatList
        data={data}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className=" bg-primary "
      />
    </View>
  );
};

export default SliderPreMainPage;
