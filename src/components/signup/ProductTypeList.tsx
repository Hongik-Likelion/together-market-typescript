import { EtcIcon, FishIcon, FoodIcon, FruitIcon } from "@components/icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import ProductTypeItem from "./ProductTypeItem";

const ProductTypeList = () => {
  const productTypeItems = [
    {
      productId: 1,
      productType: "먹거리",
      icon: <FoodIcon />,
    },
    {
      productId: 2,
      productType: "해산물",
      icon: <FishIcon />,
    },
    {
      productId: 3,
      productType: "채소/과일",
      icon: <FruitIcon />,
    },
    {
      productId: 4,
      productType: "기타",
      icon: <EtcIcon />,
    },
  ];

  return (
    <View style={styles.container}>
      {productTypeItems.map((item) => (
        <View style={styles.itemMargin} key={item.productId}>
          <ProductTypeItem item={item} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
  },
  itemMargin: {
    marginBottom: 10,
  },
});

export default ProductTypeList;
