import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import data from "@/data";
import SliderPreMainPage from "@/components/sliderPreMainPage";
export default function index() {
  return (
    <View className="p-6 bg-auth flex-1 flex items-center justify-center ">
      <SliderPreMainPage />
      <View className="bg-white w-full rounded-[35px] flex items-center ">
        <Text className="text-bold text-4xl mt-10 ">متنوع و خاص!</Text>
        <Text className="text-center mt-4 ">
          از سرویس های روزمره تا نیاز های خاص شما!{"\n"} همه در ویلر از پیش
          اماده شده
        </Text>
        <Link
          className="h-14 flex text-white text-xl mt-10 text-center pt-3  items-center justify-center
            bg-auth w-80 rounded-xl"
          href={"./register"}
        >
          ورود به ویلر
        </Link>
        <Link
          className="border-2 border-gray-200 mt-4 text-center pt-3 rounded-xl w-80 h-14 text-xl"
          href={"./"}
        >
          پشتیبانی
        </Link>
        <Text className=" px-6 text-sm mt-6 mb-10 text-center">
          با ادامه استفاده از سرویس با قوانین و شرایط استفاده از ویلرو قوانین
          حریم خصوصی ویلر موافقت کرده اید.
        </Text>
      </View>
    </View>
  );
}
