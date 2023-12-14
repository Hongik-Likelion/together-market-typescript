import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { markets } from "@constants/dummy";
import MarketItem from "./MarketItem";

type Props = {};

const MarketList = (props: Props) => {
  const items = markets;
  return (
    <FlatList
      style={styles.list}
      data={items}
      keyExtractor={(item) => "" + item.id}
      renderItem={({ item }) => <MarketItem data={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
});

export default MarketList;
