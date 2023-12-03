import KakaoLoginButton from "@components/buttons/KakaoLoginButton";
import { GlobalStyles } from "@constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";

type Props = {};

const OnBoardingScreen = (props: Props) => {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#ffffff", GlobalStyles.colors.main01]}
      start={{ x: 0.5, y: 0.6 }}
    >
      <Image
        source={require("../../assets/images/app-title.png")}
        resizeMode={"cover"}
      />

      <Text style={styles.loginInfoText}>카카오 로그인으로 시작해보세요!</Text>
      <KakaoLoginButton style={styles.button} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginInfoText: {
    marginTop: 53,

    fontSize: 18,
    fontStyle: "normal",
    fontFamily: "SUIT-500",
  },

  button: {
    marginTop: 15,
  },
});

export default OnBoardingScreen;
