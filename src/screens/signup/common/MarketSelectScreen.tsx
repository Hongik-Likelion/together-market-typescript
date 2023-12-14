import MarketList from "@components/signup/MarketList";
import SignUpInput from "@components/signup/SignUpInput";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "@constants/styles";

const MarketSelectScreen = () => {
  return (
    <View style={styles.container}>
      <SignUpInput type={"input"}>
        <Feather
          name="search"
          size={24}
          color={GlobalStyles.colors.main01}
          suppressHighlighting={true}
        />
      </SignUpInput>
      <MarketList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 20,
    paddingHorizontal: 18,

    backgroundColor: "white",
  },
});

export default MarketSelectScreen;
