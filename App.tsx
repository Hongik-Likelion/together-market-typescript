import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpRoutes from "@routes/SignUpRoutes";
import { RootStackParamList } from "@routes/types";
import OnBoardingScreen from "@screens/OnBoardingScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
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
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <RootStack.Screen name="SignUp" component={SignUpRoutes} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
