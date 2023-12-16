import { GlobalStyles } from "@constants/styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";

import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSignUp } from "src/hook/useSignUp";

const SignUpHeader = () => {
  const { signUpType } = useSignUp();

  /** 회원가입 타입 선택 화면까지 포함된 값 */
  const totalCustomerSignUpStep = 3;
  const totalOwnerSignUpStep = 4;

  const totalSignUpStep = useMemo(
    () =>
      signUpType === "owner" ? totalOwnerSignUpStep : totalCustomerSignUpStep,
    [signUpType]
  );

  const { getState } = useNavigation<SignUpScreenNavigationProps>();

  const currentStep = getState().index;
  const signUpStepArray = Array.from(
    { length: totalSignUpStep },
    (_, index) => index
  );

  return (
    <View style={styles.headerContainer}>
      {signUpStepArray.map((step) => (
        <Entypo
          key={`stepCircle ${step}`}
          name="dot-single"
          size={24}
          color={
            step <= currentStep
              ? GlobalStyles.colors.main01
              : GlobalStyles.colors.gray01
          }
        />
      ))}
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    paddingTop: 65,

    backgroundColor: "white",
  },
});
