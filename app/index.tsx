import Animation from "@/components/LottiePlater";
import { router, usePathname, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import {  Platform, StyleSheet, View } from "react-native";

export default function Page() {
  const navigation = useRootNavigationState();
  const path = usePathname();

  useEffect(() => {
    if (!navigation?.key) return;

    const redirectionInterval = setInterval(() => {
      router.replace("/(tabs)");
    }, 5000);

    return () => clearInterval(redirectionInterval);
  }, [navigation, path]);

  return (
    <View style={styles.main}>
      <Animation />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: "100%",
    marginTop: Platform.OS === "ios" ? 5.2 : 0,
  },
});
