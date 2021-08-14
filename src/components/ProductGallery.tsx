/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Product from "./Product";
import { IProduct } from "../constants/products";

interface Props {
  products: IProduct[];
}

const ProductGallery: React.FC<Props> = ({ products }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            price={item.price}
            productInCart={false /* Make this value dynamic */}
          />
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  }
});

export default ProductGallery;
