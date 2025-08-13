import React from "react";
import { ScrollView, Text, View } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <Text className="text-2xl text-white mt-20">hello welcome to app</Text>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="w-full flex items-center justify-center mx-auto">
          <SearchBar
            placeholder={"this is search the product"}
            onPress={() => router.push("./search")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
