import { GlobalStyles } from "@constants/styles";
import React, { ReactNode } from "react";
import { KeyboardType, Pressable, StyleSheet, TextInput } from "react-native";

type CommonProps = {
  value?: string;
  placeholder?: string;
  editable?: boolean;
  keyboardType?: KeyboardType;
  children?: ReactNode;
};

type InputProps = CommonProps & {
  type: "input";
};

type NavigationProps = CommonProps & {
  type: "navigation";
  onNavigate: () => void | null;
};

type Props = InputProps | NavigationProps;

const SignUpInput = ({
  children,
  value,
  onNavigate = null,
  keyboardType,
  placeholder,
  editable = true,
}: Props) => {
  return (
    <Pressable style={styles.inputContainer} onPress={onNavigate}>
      <TextInput
        style={styles.input}
        value={value}
        onPressIn={onNavigate} // for IOS
        editable={editable}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,

    flexDirection: "row",
    alignItems: "center",

    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.gray02,

    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0.2, height: 0.25 },

    paddingHorizontal: 8,
  },

  input: {
    flexGrow: 1,
    height: "100%",

    fontSize: 18,
    fontFamily: "SUIT-600",
  },
  text: {
    flexGrow: 1,
    fontFamily: "SUIT-600",
    fontSize: 18,
  },
});

export default SignUpInput;
