import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MarketSelectScreenHeader from "@components/headers/MarketSelectScreenHeader";
import SignUpHeader from "@components/headers/SignUpHeader";
import {
  GuideSelectScreen,
  MarketSelectScreen,
  SignUpTypesScreen,
} from "@screens/signup/common";
import { FavoriteMarketScreen } from "@screens/signup/customer";
import OwnerMarketScreen from "@screens/signup/owner/OwnerMarketScreen";
import ProductionTypesScreen from "@screens/signup/owner/ProductionTypesScreen";
import StoreDetailScreen from "@screens/signup/owner/StoreDetailScreen";
import { SignUpProvider } from "@store/context/SignUpContext";
import { initSignUpState } from "@store/reducer/SignUpReducer";
import React from "react";
import { SignUpParamList } from "./types";

const SignUpStack = createNativeStackNavigator<SignUpParamList>();

const SignUpRoutes = () => {
  return (
    <SignUpProvider
      signUpType={initSignUpState.signUpType}
      request={initSignUpState.request}
    >
      <SignUpStack.Navigator initialRouteName="SignUpTypes">
        <SignUpStack.Screen
          name="SignUpTypes"
          component={SignUpTypesScreen}
          options={{ headerShown: false }}
        />

        {/* customer signup group */}
        <SignUpStack.Group
          screenOptions={{
            header: () => <SignUpHeader />,
          }}
        >
          <SignUpStack.Group navigationKey="customer-signup">
            <SignUpStack.Screen
              name="FavoriteMarket"
              component={FavoriteMarketScreen}
            />
          </SignUpStack.Group>
          <SignUpStack.Group navigationKey="owner-signup">
            <SignUpStack.Screen
              name="OwnerMarket"
              component={OwnerMarketScreen}
            />
            <SignUpStack.Screen
              name="ProductionTypes"
              component={ProductionTypesScreen}
            />
            <SignUpStack.Screen
              name="StoreDetail"
              component={StoreDetailScreen}
            />
          </SignUpStack.Group>

          <SignUpStack.Screen
            name="GuideSelect"
            component={GuideSelectScreen}
          />
        </SignUpStack.Group>

        {/* signup common screen */}

        <SignUpStack.Screen
          name="MarketSelect"
          component={MarketSelectScreen}
          options={{ header: () => <MarketSelectScreenHeader /> }}
        />
      </SignUpStack.Navigator>
    </SignUpProvider>
  );
};

export default SignUpRoutes;
