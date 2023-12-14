import MainButton from "@components/buttons/MainButton";
import SignUpNavigation from "@components/buttons/SignUpNavigation";
import { GlobalStyles } from "@constants/styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  SignUpNavigationKeys,
  SignUpScreenNavigationProps,
} from "@routes/types";
import React, { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";

type guideButtonType = {
  nextNavigation: SignUpNavigationKeys;
  title: string;
};

const GuideSelectScreen = () => {
  const [selectedButton, setSelectedButton] =
    useState<SignUpNavigationKeys | null>(null);
  const { navigate } = useNavigation<SignUpScreenNavigationProps>();

  const userName = "김영희";
  const guideButtons: guideButtonType[] = [
    {
      nextNavigation: "FavoriteMarket",
      title: "함께사장 안내받기",
    },
    {
      nextNavigation: "MarketSelect",
      title: "안내 건너뛰기",
    },
  ];

  const handleSelectGuide = (nextScreen: SignUpNavigationKeys) =>
    setSelectedButton(nextScreen);

  const handleNextScreen = () => {
    if (selectedButton) navigate(selectedButton);
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{userName}님,</Text>
          <Text style={styles.infoText}>
            <Text style={[styles.infoText, styles.textHighlight]}>
              함께사장 안내서
            </Text>
            를 확인하시겠어요?
          </Text>
          <Text style={styles.cautionText}>
            안내를 통해 서비스 이용에 큰 도움을 드릴 수 있어요
          </Text>
        </View>
        <View style={styles.buttons}>
          {guideButtons.map((button) => (
            <MainButton
              style={styles.button}
              textStyle={styles.buttonText}
              key={button.title}
              title={button.title}
              highlight={selectedButton === button.nextNavigation}
              onPress={handleSelectGuide.bind(this, button.nextNavigation)}
              icon={
                selectedButton === button.nextNavigation ? (
                  <FontAwesome name="check-circle" size={24} color={"white"} />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={24}
                    color={GlobalStyles.colors.gray01}
                  />
                )
              }
            />
          ))}
        </View>
      </View>

      <View style={styles.navigationContainer}>
        <SignUpNavigation
          onPressNext={handleNextScreen}
          highlight={!!selectedButton}
          disabled={!selectedButton}
        />
      </View>
    </View>
  );
};

const { height: deviceHeight } = Dimensions.get("window");

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
    height: deviceHeight < 812 ? "30%" : "14%",

    justifyContent: "space-around",
    marginBottom: 75,
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
    marginBottom: deviceHeight < 812 ? 30 : 200,
  },
  button: {
    height: 38,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    marginBottom: 14,
    paddingHorizontal: 21,

    borderWidth: 1.324,
    borderRadius: 10.591,
    borderColor: GlobalStyles.colors.gray01,
  },
  buttonHighlight: {
    backgroundColor: GlobalStyles.colors.main03,
  },
  buttonTextHighlight: {
    color: "black",
  },
  buttonText: {
    marginLeft: 21,

    fontSize: 15,
    fontFamily: "SUIT-500",
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

export default GuideSelectScreen;
