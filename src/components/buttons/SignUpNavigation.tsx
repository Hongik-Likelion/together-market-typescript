import { GlobalStyles } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  onPressNext: () => void;
  activate: boolean;
};

const SignUpNavigation = ({ onPressNext, activate }: Props) => {
  const { goBack } = useNavigation<SignUpScreenNavigationProps>();

  const handlePrevScreen = () => goBack();

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.iconStyle}
        name="md-chevron-back-outline"
        size={19.2}
        color={"black"}
        suppressHighlighting={true}
        onPress={handlePrevScreen}
      >
        이전으로
      </Ionicons>
      <Pressable
        style={
          activate ? [styles.button, styles.buttonActivate] : styles.button
        }
        onPress={onPressNext}
        disabled={!activate}
      >
        <Text
          style={
            activate
              ? [styles.buttonText, styles.buttonTextActivate]
              : styles.buttonText
          }
        >
          계속하기
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpNavigation;

const { width: deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {},
  iconStyle: {
    marginBottom: 10,
  },
  button: {
    height: deviceWidth < 380 ? 40 : 48,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.main01,
  },
  buttonActivate: {
    backgroundColor: GlobalStyles.colors.main01,
  },

  buttonText: {
    color: GlobalStyles.colors.main01,
    fontSize: 18,
    fontFamily: "SUIT-700",
  },

  buttonTextActivate: {
    color: "white",
  },
});
