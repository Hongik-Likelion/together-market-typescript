import { GlobalStyles } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  item: {
    productId: number;
    productType: string;
    icon: ReactNode;
  };
};

const ProductTypeItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.item}>
        <Ionicons
          style={styles.checkIcon}
          name="checkmark-outline"
          size={24}
          color={GlobalStyles.colors.gray01}
        />
        {item.icon}
      </Pressable>
      <Text style={styles.itemTypeText}>{item.productType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    width: 160,
    height: 100,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.gray01,
  },

  checkIcon: {
    position: "absolute",
    top: 0,
    right: 6,
  },

  itemTypeText: {
    marginTop: 5,
    fontFamily: "SUIT-600",
    fontSize: 15,
  },
});

export default ProductTypeItem;
