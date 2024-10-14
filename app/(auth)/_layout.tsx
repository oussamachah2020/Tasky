import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function AuthLayout() {
    return <Stack screenOptions={{
        contentStyle: {
            backgroundColor: "#fff",
        },
        headerShown: false
    }}/>
}