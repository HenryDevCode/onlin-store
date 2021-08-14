/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Masthead from "../components/Masthead";
import Strong from "../components/Strong";
import Cart from "../components/Cart";

import colors from "../constants/colors";
import { IProduct } from "../constants/products";

interface Props {
  cartProducts: IProduct[];
}

const CartScreen: React.FC<Props> = ({ cartProducts }) => {
  const cartTotalPrice = cartProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );
  return (
    <View style={styles.container}>
      <Masthead text="This is your cart">
        <Text style={styles.mastheadText}>
          Your current total is <Strong>${cartTotalPrice}</Strong>
        </Text>
      </Masthead>
      <Cart cartProducts={cartProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    padding: 15
  },
  mastheadText: {
    paddingVertical: 10
  }
});

export default CartScreen;
