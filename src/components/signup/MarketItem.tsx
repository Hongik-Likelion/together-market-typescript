import { GlobalStyles } from "@constants/styles";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  data: {
    id: number;
    name: string;
  };
};

const MarketItem = ({ data }: Props) => {
  const { id, name } = data;

  return (
    <Pressable style={styles.item}>
      <MaterialCommunityIcons
        name="map-marker"
        size={24}
        color={GlobalStyles.colors.gray01}
      />
      <Text style={styles.itemText}>{name}</Text>
      <Feather
        name="arrow-up-left"
        size={24}
        color={GlobalStyles.colors.gray01}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    flexDirection: "row",

    marginBottom: 15,
  },
  itemText: {
    flexGrow: 1,
    marginLeft: 10,

    fontSize: 16,
    fontFamily: "SUIT-600",
  },
});

export default MarketItem;
