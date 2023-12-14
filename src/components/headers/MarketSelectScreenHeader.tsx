import MainButton from "@components/buttons/MainButton";
import { GlobalStyles } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MarketSelectScreenHeader = () => {
  const { goBack } = useNavigation<SignUpScreenNavigationProps>();
  return (
    <View style={styles.header}>
      <Ionicons
        name="md-chevron-back-outline"
        size={24}
        color={"black"}
        onPress={goBack}
        suppressHighlighting={true}
      />
      <Text style={styles.headerTitle}>시장 위치 설정</Text>
      <MainButton
        style={styles.button}
        textStyle={styles.buttonText}
        title="완료"
        activate={true}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 18,

    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.gray01,

    backgroundColor: "white",
  },
  button: {
    width: 80,
    height: 30,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "SUIT-600",
  },
  headerTitle: {
    flexGrow: 1,

    marginLeft: 14,

    fontSize: 18,
    fontFamily: "SUIT-600",
  },
});

export default MarketSelectScreenHeader;
