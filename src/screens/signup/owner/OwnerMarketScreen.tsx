import SignUpNavigation from "@components/buttons/SignUpNavigation";
import SignUpInput from "@components/signup/SignUpInput";
import { GlobalStyles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const OwnerMarketScreen = () => {
  const userName = "김영희";

  const { navigate } = useNavigation<SignUpScreenNavigationProps>();

  const handleNextScreen = () => navigate("ProductionTypes");
  return (
    <View style={styles.rootContainer}>
      <KeyboardAwareScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{userName}님,</Text>
            <Text style={styles.infoText}>
              <Text style={[styles.infoText, styles.textHighlight]}>
                시장 위치와 가게 이름
              </Text>
              을 입력해주세요.
            </Text>
            <Text style={styles.cautionText}>
              시장 위치, 가게 이름 모두 입력해주세요. (필수)
            </Text>
          </View>
          <View style={styles.inputGroups}>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputTitleText}>시장 위치</Text>
              <SignUpInput type="input" placeholder="망원시장" />
              <Text style={styles.cautionText}>복수 입력 불가</Text>
            </View>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputTitleText}>시장 위치</Text>
              <SignUpInput type="input" placeholder="싱글벙글 과일가게" />
            </View>
          </View>
        </View>
        <View style={styles.navigationContainer}>
          <SignUpNavigation onPressNext={handleNextScreen} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 18,
    backgroundColor: "white",
  },

  contentContainer: {
    flex: 2,
    justifyContent: "center",
  },
  infoContainer: {
    justifyContent: "space-around",
    marginBottom: 44,
  },
  infoText: {
    fontSize: deviceWidth < 380 ? 20 : 22,
    fontFamily: "SUIT-700",
  },
  cautionText: {
    paddingLeft: 4,
    marginTop: 10,

    fontSize: deviceWidth < 380 ? 14 : 16,
    fontFamily: "SUIT-500",
    color: GlobalStyles.colors.gray01,
  },
  textHighlight: {
    color: GlobalStyles.colors.main01,
  },
  inputGroups: {
    marginBottom: deviceHeight < 812 ? 0 : 140,
  },
  inputGroupContainer: {
    marginBottom: deviceHeight < 812 ? 12 : 40,
  },
  inputTitleText: {
    marginBottom: 15,

    fontSize: deviceWidth < 380 ? 16 : 18,
    fontFamily: "SUIT-600",
  },
  navigationContainer: {
    marginTop: 30,
  },
});

export default OwnerMarketScreen;
