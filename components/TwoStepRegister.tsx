import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";
import axios from "axios";
import { router } from "expo-router";
type typePhoneNumber = {
  phone: string;
};

export default function TwoStepRegister({ phone }: typePhoneNumber) {
  const [values, setValues] = useState(Array(5).fill(""));
  const ref = useRef([]);
  const [message, setMessage] = useState();
  const navigate = useNavigation();

  const submitCode = async () => {
    const newb = values.join("");

    const connewb = Number(newb);
    console.log(typeof newb, "this is new v");
    console.log(typeof connewb, "this is new v");
    console.log(connewb);
    const response = await axios.post(
      "http://192.168.43.110:3000/users/check",
      {
        phoneNumber: phone,
        InputCode: connewb,
      }
    );
    console.log(response.data, "this is massage");
    if (response.data.auth == true) {
      router.navigate("/(main)/home");
    }
    setMessage(response.data.message);
    console.log("this is ");
    console.log("this i", values);
  };
  const handleChange = (text: any, index: any) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);
    console.log("ffff");
  };
  const testFunction = (t: any) => {
    console.log(t, "tis is t");
    console.log("this is test");
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
                ref={(el) =>
                  console.log(ref.current[index], el, "this is log input")
                }
                maxLength={1}
                placeholder={`_`}
                keyboardType="numeric"
                value={val}
                onFocus={(t) => testFunction(t)}
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
