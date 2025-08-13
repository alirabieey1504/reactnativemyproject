import { View, Image, TextInput } from "react-native";
import React from "react";
import { Images } from "@/constants/images";

type mySearchProps = {
  onPress?: () => void;
  placeholder: string;
};
export default function searchBar({ onPress, placeholder }: mySearchProps) {
  return (
    <View className="flex w-96 rounded-lg items-center justify-between px-4 py-2 mt-4  flex-row bg-slate-700 ">
      <Image className="size-8" source={Images.search}></Image>
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        placeholderTextColor={"#a8b5db"}
        className="text-gray-300 flex-1 ml-2"
      />
    </View>
  );
}
