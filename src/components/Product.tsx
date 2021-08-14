/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Strong from "./Strong";
import colors from "../constants/colors";

interface Props {
  name: string;
  price: number;
  productInCart: boolean;
}

const Product: React.FC<Props> = ({ name, price, productInCart }) => {
  const [count, setCount] = useState(0);
  
  const incrementCartItems = () => {
    setCount(count + 1); // count = 1
    // 
  }

  return (
    <View style={[styles.container, productInCart ? styles.productInCart : {}]}>
      <View style={styles.rowContainer}>
        <Strong style={{ fontSize: 20 }}>{name}</Strong>
      </View>
      <View style={styles.rowContainer}>
        <Text>${price}</Text>
      </View>
      <View style={styles.rowContainer}>
        {!productInCart && <Button title="Add to cart" onPress={incrementCartItems} />}
        {productInCart && (
          <Button
            title="Remove from cart"
            color={colors.secondary}
            onPress={() => {}}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: colors.inactiveProductBackground,
    borderRadius: 10,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5
  },
  productInCart: {
    backgroundColor: colors.activeProductBackground
  },
  rowContainer: { padding: 10 }
});

export default Product;
