import { Stack } from "expo-router";
import "./globals.css";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#1E0B4B" },
      }}
    >
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />;
    </Stack>
  );
}
