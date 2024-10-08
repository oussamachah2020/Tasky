import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { AlertNotificationRoot } from "react-native-alert-notification";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <PaperProvider>
      <AlertNotificationRoot>
        <StatusBar style="dark" />
        <Slot />
      </AlertNotificationRoot>
    </PaperProvider>
  );
}
