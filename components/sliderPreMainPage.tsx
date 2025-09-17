import { View, Text, FlatList } from "react-native";
import React from "react";
import data from "@/data";
import OnboardingItem from "./onboardingItem";
const SliderPreMainPage = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="h-60 bg-primary "
      />
    </View>
  );
};

export default SliderPreMainPage;
