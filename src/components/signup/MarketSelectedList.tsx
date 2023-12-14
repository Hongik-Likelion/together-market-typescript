import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "@constants/styles";
import MarketSelectedItem from "./MarketSelectedItem";

const MarketSelectedList = () => {
  const items = [
    {
      id: 1,
      name: "망원시장",
    },
    {
      id: 3,
      name: "망원시장",
    },
    {
      id: 2,
      name: "방신시장, 방신시장, 방신시장, 방신시장",
    },
  ];

  return (
    <View style={styles.listContainer}>
      {items.length === 0 ? (
        <Text style={styles.cautionText}>한 곳 이상 선택해주세요. (필수)</Text>
      ) : (
        items.map((item) => (
          <View style={styles.itemMargin} key={item.id}>
            <MarketSelectedItem data={item} />
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  itemMargin: {
    width: "33.3%",
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  cautionText: {
    paddingLeft: 4,
    marginTop: 10,

    fontSize: 16,
    fontFamily: "SUIT-500",
    color: GlobalStyles.colors.gray01,
  },
});

export default MarketSelectedList;
