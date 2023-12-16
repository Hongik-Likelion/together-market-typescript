import SignUpNavigation from "@components/buttons/SignUpNavigation";
import SignUpInput from "@components/signup/SignUpInput";
import { GlobalStyles } from "@constants/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "@routes/types";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const StoreDetailScreen = () => {
  const userName = "김영희";
  const date = new Date();

  const { navigate } = useNavigation<SignUpScreenNavigationProps>();
  const handleNextScreen = () => navigate("GuideSelect");

  const [isVisibleTimePicker, setIsVisibleTimePicker] =
    useState<boolean>(false);

  const handleOpenTimePicker = () =>
    setIsVisibleTimePicker((visible) => !visible);

  const handleTimeChange = (
    event: DateTimePickerEvent,
    date: Date | undefined
  ) => {
    const { type } = event;

    switch (type) {
      case "set":
        if (date) {
          // const formattedTime = getFormattedTime(date);
        }
        break;
      case "dismissed":
        setIsVisibleTimePicker(false);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <KeyboardAwareScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{userName}님,</Text>
            <Text style={styles.infoText}>
              <Text style={[styles.infoText, styles.textHighlight]}>
                가게 상세 정보
              </Text>
              를 입력해주세요.
            </Text>
            <Text style={styles.cautionText}>
              모든 항목을 기입해주세요. (필수)
            </Text>
          </View>
          <View style={styles.inputGroups}>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputGroupTitleText}>가게 주소</Text>
              <SignUpInput type={"input"} placeholder="주소를 입력해주세요.">
                <Feather
                  name="search"
                  size={24}
                  color={GlobalStyles.colors.main01}
                  suppressHighlighting={true}
                />
              </SignUpInput>
            </View>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputGroupTitleText}>대표 상품명</Text>
              <SignUpInput type="input" placeholder="떡볶이, 순대, 튀김" />
            </View>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputGroupTitleText}>영업 시간</Text>
              <View style={styles.timeInputGroupContainer}>
                <View style={styles.containerRow}>
                  <Text style={styles.timeInputTitleText}>시작</Text>
                  <View style={{ width: "70%" }}>
                    <SignUpInput
                      type="navigation"
                      editable={false}
                      placeholder="12:00 AM"
                      onNavigate={handleOpenTimePicker}
                    >
                      <Ionicons
                        name="chevron-down-outline"
                        size={24}
                        color={GlobalStyles.colors.gray01}
                      />
                    </SignUpInput>
                  </View>
                </View>
                <View style={styles.containerRow}>
                  <Text style={styles.timeInputTitleText}>종료</Text>
                  <View style={{ width: "70%" }}>
                    <SignUpInput
                      type="navigation"
                      editable={false}
                      placeholder="12:00 AM"
                      onNavigate={handleOpenTimePicker}
                    >
                      <Ionicons
                        name="chevron-down-outline"
                        size={24}
                        color={GlobalStyles.colors.gray01}
                      />
                    </SignUpInput>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.inputGroupContainer}>
              <Text style={styles.inputGroupTitleText}>영업일</Text>
              <SignUpInput
                type="input"
                placeholder="(예시: 매일, 월 ~금, 화~토...)"
              />
            </View>
          </View>
        </View>
        <View style={styles.navigationContainer}>
          <SignUpNavigation onPressNext={handleNextScreen} />
        </View>
      </KeyboardAwareScrollView>
      {isVisibleTimePicker && (
        <RNDateTimePicker
          value={date}
          mode="time"
          display="spinner"
          timeZoneOffsetInMinutes={60 * 9}
          onChange={handleTimeChange}
        />
      )}
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
    marginBottom: 15,
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
  inputGroups: {},
  inputGroupContainer: {
    marginBottom: deviceHeight < 812 ? 12 : 20,
  },
  inputGroupTitleText: {
    marginBottom: 15,

    fontSize: deviceWidth < 380 ? 16 : 18,
    fontFamily: "SUIT-600",
  },
  timeInputGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerRow: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeInputTitleText: {
    marginRight: 10,
    fontSize: 16,
    fontFamily: "SUIT-600",
  },

  navigationContainer: {
    marginBottom: deviceHeight < 812 ? 30 : 0,
    marginTop: deviceHeight < 812 ? 0 : 30,
  },
});

export default StoreDetailScreen;
