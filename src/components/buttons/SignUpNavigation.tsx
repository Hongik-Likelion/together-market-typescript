import { GlobalStyles } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MainButton from "./MainButton";

type Props = {
  onPressNext: () => void;
  disabled?: boolean;
  highlight?: boolean;
};

const SignUpNavigation = ({
  onPressNext,
  disabled = false,
  highlight = false,
}: Props) => {
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

      <MainButton
        style={styles.button}
        textStyle={styles.buttonText}
        title="계속하기"
        onPress={onPressNext}
        highlight={highlight}
        disabled={disabled}
      />
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
  },
  buttonText: {
    color: GlobalStyles.colors.main01,
    fontSize: 18,
    fontFamily: "SUIT-700",
  },
});
