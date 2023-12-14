import SignUpNavigation from "@components/buttons/SignUpNavigation";
import { GlobalStyles } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { SignUpScreenNavigationProps } from "@routes/types";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

type SignUpType = "customer" | "owner";

const SignUpTypesScreen = () => {
  // 카카오 로그인 사용자 이름
  const userName = "김영희";

  const { navigate } = useNavigation<SignUpScreenNavigationProps>();

  const [isSignUpTypeSelected, setIsSignUpTypeSelected] =
    useState<boolean>(false);

  const [pressedButton, setPressedButton] = useState({
    ownerTypeButton: false,
    customerTypeButton: false,
  });

  const handleNextScreen = () => {
    if (pressedButton.customerTypeButton) navigate("FavoriteMarket");
  };

  const handleSignUpTypeSelect = (type: SignUpType) => {
    if (type === "owner")
      setPressedButton(() => ({
        customerTypeButton: false,
        ownerTypeButton: true,
      }));

    if (type === "customer")
      setPressedButton(() => ({
        customerTypeButton: true,
        ownerTypeButton: false,
      }));

    setIsSignUpTypeSelected(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{userName}님,</Text>
          <Text style={styles.infoText}>
            <Text style={[styles.infoText, styles.textHighlight]}>유형</Text>을
            선택해주세요!
          </Text>
          <Text style={styles.cautionText}>
            한 가지 유형을 선택해주세요. (필수)
          </Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={
              pressedButton.ownerTypeButton
                ? [styles.button, styles.buttonHighlight]
                : styles.button
            }
            onPress={handleSignUpTypeSelect.bind(this, "owner")}
          >
            <Ionicons
              style={styles.checkIcon}
              name="checkmark-outline"
              size={24}
              color={
                pressedButton.ownerTypeButton
                  ? GlobalStyles.colors.main01
                  : GlobalStyles.colors.gray01
              }
            />
            <Text
              style={
                pressedButton.ownerTypeButton
                  ? [styles.buttonText, styles.buttonTextHighlight]
                  : styles.buttonText
              }
            >
              사장님
            </Text>
          </Pressable>
          <Pressable
            style={
              pressedButton.customerTypeButton
                ? [styles.button, styles.buttonHighlight]
                : styles.button
            }
            onPress={handleSignUpTypeSelect.bind(this, "customer")}
          >
            <Ionicons
              style={styles.checkIcon}
              name="checkmark-outline"
              size={24}
              color={
                pressedButton.customerTypeButton
                  ? GlobalStyles.colors.main01
                  : GlobalStyles.colors.gray01
              }
            />
            <Text
              style={
                pressedButton.customerTypeButton
                  ? [styles.buttonText, styles.buttonTextHighlight]
                  : styles.buttonText
              }
            >
              손님
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <SignUpNavigation
          onPressNext={handleNextScreen}
          highlight={isSignUpTypeSelected}
        />
      </View>
    </View>
  );
};

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 18,

    backgroundColor: "white",
  },
  contentContainer: {
    flex: 2,

    width: "100%",
    justifyContent: "center",
  },
  infoContainer: {
    width: "100%",
    height: deviceHeight < 812 ? "16%" : "14%",

    justifyContent: "space-around",

    marginBottom: 44,
  },
  infoText: {
    fontSize: 22,
    fontFamily: "SUIT-700",
  },
  cautionText: {
    paddingLeft: 4,
    marginTop: 10,

    fontSize: 16,
    fontFamily: "SUIT-500",
    color: GlobalStyles.colors.gray01,
  },
  textHighlight: {
    color: GlobalStyles.colors.main01,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 100,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    width: deviceWidth < 380 ? 140 : 160,
    height: deviceWidth < 380 ? 130 : 150,

    borderWidth: 1.45,
    borderRadius: 14.5,
    borderColor: GlobalStyles.colors.gray01,
  },
  buttonHighlight: {
    backgroundColor: GlobalStyles.colors.main03,
  },
  buttonTextHighlight: {
    color: "black",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "SUIT-700",
    color: GlobalStyles.colors.darkgray02,
  },
  checkIcon: {
    position: "absolute",
    top: 0,
    right: 6,
  },

  navigationContainer: {
    width: "100%",
    marginBottom: 50,
  },
});

export default SignUpTypesScreen;
