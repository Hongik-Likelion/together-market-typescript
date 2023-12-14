import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { SignUpParamList } from "./types";
import {
  GuideSelectScreen,
  SignUpTypesScreen,
  MarketSelectScreen,
} from "@screens/signup/common";
import { FavoriteMarketScreen } from "@screens/signup/customer";
import MarketSelectScreenHeader from "@components/headers/MarketSelectScreenHeader";
import SignUpHeader from "@components/headers/SignUpHeader";

const SignUpStack = createNativeStackNavigator<SignUpParamList>();

const SignUpRoutes = () => {
  /** 회원가입 타입 선택 화면까지 포함된 값 */
  const totalCustomerSignUpStep = 3;
  // const totalOwnerSignUpStep = 4;

  return (
    <SignUpStack.Navigator initialRouteName="SignUpTypes">
      <SignUpStack.Screen
        name="SignUpTypes"
        component={SignUpTypesScreen}
        options={{ headerShown: false }}
      />

      {/* customer signup group */}
      <SignUpStack.Group
        screenOptions={{
          header: () => (
            <SignUpHeader totalSignUpStep={totalCustomerSignUpStep} />
          ),
        }}
      >
        <SignUpStack.Screen
          name="FavoriteMarket"
          component={FavoriteMarketScreen}
        />
        <SignUpStack.Screen name="GuideSelect" component={GuideSelectScreen} />
      </SignUpStack.Group>

      {/* owner signup group */}
      {/* TODO 사장님 회원가입 */}

      {/* signup common screen */}
      <SignUpStack.Group>
        <SignUpStack.Screen
          name="MarketSelect"
          component={MarketSelectScreen}
          options={{ header: () => <MarketSelectScreenHeader /> }}
        />
      </SignUpStack.Group>
    </SignUpStack.Navigator>
  );
};

export default SignUpRoutes;
