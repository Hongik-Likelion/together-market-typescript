import { GlobalStyles } from "@constants/styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";

import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  totalSignUpStep: number;
};

const SignUpHeader = ({ totalSignUpStep }: Props) => {
  const { getState } = useNavigation<SignUpScreenNavigationProps>();

  const currentStep = getState().index;
  const signUpStepArray = Array.from(
    { length: totalSignUpStep },
    (_, index) => index
  );

  console.log(currentStep);

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
