import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MainParamList } from "./types";
import {
  ChatScreen,
  HomeScreen,
  MarketInfoScreen,
  ProfileScreen,
} from "@screens/main";

const Tab = createBottomTabNavigator<MainParamList>();

const MainRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="MarketInfo" component={MarketInfoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainRoutes;
