import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

export default function Animation() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require("../assets/splash.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
}
