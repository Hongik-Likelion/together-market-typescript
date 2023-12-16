import SignUpNavigation from "@components/buttons/SignUpNavigation";
import ProductTypeList from "@components/signup/ProductTypeList";
import { GlobalStyles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const ProductionTypesScreen = () => {
  const userName = "김영희";

  const { navigate } = useNavigation<SignUpScreenNavigationProps>();

  const handleNextScreen = () => navigate("StoreDetail");
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{userName}님,</Text>
          <Text style={styles.infoText}>
            <Text style={[styles.infoText, styles.textHighlight]}>
              어떤 상품을
            </Text>
            판매하시나요?
          </Text>
          <Text style={styles.cautionText}>
            판매하는 상품 분류를 한가지 이상 선택해주세요. (필수)
          </Text>
        </View>
        <View style={styles.productTypeContainer}>
          <Text style={styles.productTypeTitle}>
            상품 분류
            <Text style={styles.productTypeSubTitle}>(중복 선택 가능)</Text>
          </Text>
          <ProductTypeList />
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <SignUpNavigation onPressNext={handleNextScreen} />
      </View>
    </View>
  );
};

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
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
    marginBottom: deviceHeight < 812 ? 10 : 44,
  },
  infoText: {
    fontSize: deviceWidth < 380 ? 20 : 22,
    fontFamily: "SUIT-700",
  },
  cautionText: {
    marginTop: 10,

    fontSize: deviceWidth < 380 ? 14 : 16,
    fontFamily: "SUIT-500",
    color: GlobalStyles.colors.gray01,
  },
  textHighlight: {
    color: GlobalStyles.colors.main01,
  },
  productTypeContainer: {
    marginBottom: deviceHeight < 812 ? 40 : 140,
  },
  productTypeTitle: {
    marginBottom: 20,

    fontSize: 18,
    fontFamily: "SUIT-600",
  },
  productTypeSubTitle: {
    fontSize: 13,
    fontFamily: "SUIT-500",
  },
  navigationContainer: {
    marginBottom: 50,
  },
});

export default ProductionTypesScreen;
