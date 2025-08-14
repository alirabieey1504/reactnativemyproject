import React from "react";
import { Pressable, Text, View } from "react-native";

export default function TwoStepRegister() {
  const Test = () => {
    console.log("this is ");
  };
  return (
    <View className="w-full text-center flex">
      <Text className="text-right  text-4xl font-bold">کد تایید</Text>
      <Text className="text-right mt-4 ">
        پیامک حاوی کد تایید به شماره موبایل شما ارسال شده
      </Text>
      <View className=" w-full flex items-center mt-10 mb-4">
        <Text>091288412</Text>
        <Pressable
          onPress={() => Test()}
          className="h-14 w-full flex  text-xl mt-10 text-center   items-center justify-center
                            bg-auth  rounded-xl"
        >
          <Text className="text-white">دریافت کد تایید</Text>
        </Pressable>
      </View>
    </View>
  );
}
