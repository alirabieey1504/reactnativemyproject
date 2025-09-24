import TwoStepRegister from "@/components/TwoStepRegister";

import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import axios from "axios";
export default function Resitter() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [startStepTwo, setStartStepTwo] = useState<number>(0);

  const validationPhoneNumber = async () => {
    console.log("this is wwwww");
    console.log("this is post");
    console.log(phoneNumber, "this is phone");
    if (phoneNumber.length >= 10 && phoneNumber.length < 12 && phoneNumber) {
      console.log("run");
      console.log("salam");
      setStartStepTwo(1);

      const apiPost = await axios.post(
        "http://192.168.70.194:3000/users/save",
        {
          phoneNumber: phoneNumber,
        }
      );
      console.log("this is ");

      console.log("this is nubmer");
    }
  };
  return (
    <View className="bg-auth flex-1 flex-col-reverse">
      <View className="bg-white px-6 h-[550px] rounded-[35px] flex flex-col justify-between pt-20 pb-4">
        {startStepTwo == 0 ? (
          <>
            <View>
              <Text className="text-right  text-4xl font-bold ">
                شماره موبایل{" "}
              </Text>
              <Text className="text-right mt-4 ">
                شماره موبایل خودرا وارد کنید
              </Text>
              <View className="flex flex-row mt-10  items-center px-4 rounded-xl justify-start border-2 border-gray-400 ">
                <Svg
                  width={26}
                  height={26}
                  viewBox="0 0 256 256"
                  enable-background="new 0 0 256 256"
                >
                  <G>
                    <G>
                      <Path
                        fill="#000000"
                        d="M115.7,218.2L38,135.7C2.1,97.7,0.6,50.8,34.3,19.1l10.5-9.9c1.6-1.5,3.8-2.5,6.1-2.9c15.1-2.2,43.9,28.5,51.7,44.5c5,10.4,2.4,16-0.7,18.9l-10.5,9.9c-5.6,5.2-8.5,10.4-8.7,15.2c-0.2,4.8,2.3,10,7.4,15.4l58.1,61.6c10.3,11,19.6,10.9,30.6,0.5l10.5-9.9c1.7-1.6,3.9-2.6,6.2-3c15-2.2,40.6,25.5,47.7,40.2c5.1,10.5,2.4,16.2-0.8,19.2l-10.5,9.9c-12,11.3-25.6,18.2-40.5,20.4C165.4,252.9,137.8,241.6,115.7,218.2z M217.6,189c-9.1-9.7-16.7-14.2-19.4-15l-9.5,8.9c-17,16-35.5,15.5-51.1-1.1l-58.1-61.6c-7.9-8.3-11.7-17.1-11.3-25.9c0.3-8.8,4.8-17.3,13.2-25.3l9.4-8.8C89,50.8,62.6,22.7,53.6,20.8l-9.4,8.9c-31.6,29.8-20.6,69.7,4.3,96.1l77.7,82.4c18.8,19.9,41.8,29.6,63.1,26.5c11.8-1.7,22.8-7.3,32.6-16.5l9.4-8.9C230.7,206.3,226.6,198.5,217.6,189z"
                      />
                    </G>
                  </G>
                </Svg>
                <Text className="pl-2">+98</Text>
                <TextInput
                  value={phoneNumber}
                  keyboardType="numeric"
                  maxLength={11}
                  onChangeText={(value) => setPhoneNumber(value)}
                  placeholder="9123456789"
                  placeholderClassName="px-10"
                  className="py-4 px-4  border-gray-100 rounded-xl"
                />
              </View>
            </View>
            <View>
              <Pressable
                onPress={() => validationPhoneNumber()}
                className="h-14 flex  text-xl mt-10 text-center   items-center justify-center
                    bg-auth  rounded-xl"
              >
                <Text className="text-white">دریافت کد تایید</Text>
              </Pressable>
              <Text className=" px-6 text-sm mt-6 mb-10 text-center">
                با ادامه استفاده از سرویس با قوانین و شرایط استفاده از ویلرو
                قوانین حریم خصوصی ویلر موافقت کرده اید.
              </Text>
            </View>
          </>
        ) : (
          <TwoStepRegister phone={phoneNumber} />
        )}
      </View>
    </View>
  );
}
