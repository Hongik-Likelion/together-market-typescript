import OnBoardingScreen from "@screens/OnBoardingScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // TODO 1. 폰트 추가
  // TODO 2. 글로벌 스타일 추가
  // TODO 3. 스플래시 이미지 추가

  const [isFontsLoaded] = useFonts({
    "SUIT-500": require("./assets/fonts/SUIT-Medium.ttf"),
    "SUIT-600": require("./assets/fonts/SUIT-SemiBold.ttf"),
    "SUIT-700": require("./assets/fonts/SUIT-Bold.ttf"),
  });

  const isAppReady = isFontsLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) await SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  // 초기 설정 완료되지 않은 경우
  if (!isAppReady) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <OnBoardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
