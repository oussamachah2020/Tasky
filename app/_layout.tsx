import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <PaperProvider>
      <AlertNotificationRoot>
        <StatusBar style="dark" />
        <Slot />
      </AlertNotificationRoot>
    </PaperProvider>
  );
}
