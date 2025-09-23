import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="mt-10 text-center">
      <Text>this is main</Text>
      <Link href={"./map"}>go to map</Link>
    </View>
  );
}
