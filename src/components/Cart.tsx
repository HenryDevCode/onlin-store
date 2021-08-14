/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { IProduct } from "../constants/products";

interface Props {
  cartProducts: IProduct[];
}

const Cart: React.FC<Props> = ({ cartProducts }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartProducts}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.itemLeft}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.itemRight}>
                <Text>${item.price}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50
  },
  list: {
    flex: 1,
    width: "100%"
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  itemLeft: {
    width: "80%"
  },
  itemRight: {
    width: "20%"
  }
});

export default Cart;
