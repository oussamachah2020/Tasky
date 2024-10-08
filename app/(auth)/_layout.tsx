import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function AuthLayout() {
    return <Stack screenOptions={{
        contentStyle: {
            backgroundColor: "#fff",
            paddingTop: Platform.OS === 'android' ? 45 : 50
        },
        headerShown: false
    }}/>
}