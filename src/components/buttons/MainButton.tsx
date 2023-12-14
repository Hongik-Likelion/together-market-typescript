import { GlobalStyles } from "@constants/styles";
import React, { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Props = {
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  title: string;
  highlight?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  onPress: () => void;
};

const MainButton = ({
  style,
  textStyle,
  icon,
  title,
  onPress,
  highlight = false,
  disabled = false,
}: Props) => {
  return (
    <Pressable
      style={
        highlight
          ? [styles.button, styles.buttonActivate, style]
          : [styles.button, style]
      }
      onPress={onPress}
      disabled={disabled}
    >
      <>
        {icon}
        <Text
          style={
            highlight ? [textStyle, styles.buttonTextActivate] : [textStyle]
          }
        >
          {title}
        </Text>
      </>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.main01,
  },
  buttonActivate: {
    backgroundColor: GlobalStyles.colors.main01,
  },
  buttonTextActivate: {
    color: "white",
  },
});
