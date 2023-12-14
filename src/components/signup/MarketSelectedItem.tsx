import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "@constants/styles";
import { Feather, Ionicons } from "@expo/vector-icons";

type Props = {
  data: {
    id: number;
    name: string;
  };
};

const MarketSelectedItem = ({ data }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Feather
        name="map-pin"
        size={deviceWidth < 380 ? 14 : 16}
        color="white"
      />
      <Text style={styles.itemText} numberOfLines={1}>
        {data.name}
      </Text>
      <Ionicons
        name="md-close"
        size={deviceWidth < 380 ? 18 : 20}
        color="white"
      />
    </View>
  );
};

const { width: deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemContainer: {
    height: 36,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderWidth: 3,
    borderRadius: 62.069,
    borderColor: GlobalStyles.colors.main01,

    backgroundColor: GlobalStyles.colors.main01,
  },
  itemText: {
    width: "50%",

    color: "white",
    fontSize: deviceWidth < 380 ? 12 : 14,
    fontFamily: "SUIT-600",
  },
});

export default MarketSelectedItem;
