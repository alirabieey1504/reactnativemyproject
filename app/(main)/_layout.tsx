import { Stack } from "expo-router";
import React from "react";

export default function _laytout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
    </Stack>
  );
}
