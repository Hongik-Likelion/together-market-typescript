import SignUpInput from "@components/signup/SignUpInput";
import SignUpNavigation from "@components/buttons/SignUpNavigation";
import { GlobalStyles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import MarketSelectedList from "@components/signup/MarketSelectedList";

const FavoriteMarketScreen = () => {
  const userName = "김영희";
  const { navigate } = useNavigation<SignUpScreenNavigationProps>();

  const handleNextScreen = () => navigate("GuideSelect");

  const navigateMarketSelect = () => navigate("MarketSelect");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{userName}님,</Text>
          <Text style={styles.infoText}>
            <Text style={[styles.infoText, styles.textHighlight]}>
              자주 방문하는 시장
            </Text>
            을 선택해주세요!
          </Text>
        </View>

        <SignUpInput
          type={"navigation"}
          editable={false}
          onNavigate={navigateMarketSelect}
        >
          <Feather
            name="search"
            size={24}
            color={GlobalStyles.colors.main01}
            suppressHighlighting={true}
          />
        </SignUpInput>
        <MarketSelectedList />
      </View>
      <View style={styles.navigationContainer}>
        <SignUpNavigation onPressNext={handleNextScreen} highlight={true} />
      </View>
    </View>
  );
};

const { height: deviceHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,

    minHeight: Platform.OS === "android" ? deviceHeight - 100 : 0,
    paddingTop: 32,
    paddingHorizontal: 18,

    backgroundColor: "white",
  },
  contentContainer: {
    flex: 2,
  },
  infoContainer: {
    height: deviceHeight < 812 ? "15%" : "10%",

    justifyContent: "space-around",
    marginBottom: 44,
  },
  infoText: {
    fontSize: 22,
    fontFamily: "SUIT-700",
  },

  textHighlight: {
    color: GlobalStyles.colors.main01,
  },
  navigationContainer: {
    marginBottom: 50,
  },
});

export default FavoriteMarketScreen;
