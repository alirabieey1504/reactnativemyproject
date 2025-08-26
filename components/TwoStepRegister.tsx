import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import axios from "axios";
type typePhoneNumber = {
  phone: string;
};

export default function TwoStepRegister({ phone }: typePhoneNumber) {
  const [values, setValues] = useState(Array(5).fill(""));
  const submitCode = async () => {
    const newb = values.join("");
    const connewb = Number(newb);
    console.log(newb, "this is new v");
    const response = await axios.post("http://localhost:3000/users/register", {
      phoneNumber: phone,
      step: 2,
      InputCode: connewb,
    });
    console.log(response);
    console.log("this is ");
    console.log("this i", values);
  };
  const handleChange = (text: any, index: any) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);
  };
  return (
    <View className="w-full text-center flex flex-1 flex-col justify-between ">
      <View>
        <Text className="text-right  text-4xl font-bold">کد تایید</Text>
        <Text className="text-right mt-4 ">
          پیامک حاوی کد تایید به شماره موبایل شما ارسال شده
        </Text>
        <View className=" w-full flex items-center mt-10 mb-4">
          <Text>{phone}</Text>
          <View className="flex gap-2 flex-row mt-6 justify-between items-center">
            {values.map((val, index) => (
              <TextInput
                key={index}
                placeholder={``}
                keyboardType="numeric"
                value={val}
                onChangeText={(text) => handleChange(text, index)}
                className="border-2 px-6 border-gray-300 rounded-xl w-16 h-16"
              />
            ))}
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => submitCode()}
          className="h-14 w-full flex  text-xl mt-10 text-center   items-center justify-center
                            bg-auth  rounded-xl"
        >
          <Text className="text-white">اعتبار سنجی کد تایید</Text>
        </Pressable>
        <Text className=" px-6 text-sm mt-6 mb-10 text-center">
          با ادامه استفاده از سرویس با قوانین و شرایط استفاده از ویلرو قوانین
          حریم خصوصی ویلر موافقت کرده اید.
        </Text>
      </View>
    </View>
  );
}
