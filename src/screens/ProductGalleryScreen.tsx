/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, StyleSheet } from "react-native";

import Masthead from "../components/Masthead";
import ProductGallery from "../components/ProductGallery";

import colors from "../constants/colors";
import { IProduct } from "../constants/products";

interface Props {
  products: IProduct[];
}

const ProductGalleryScreen: React.FC<Props> = ({ products }) => {
  return (
    <View style={styles.container}>
      <Masthead text="Choose your products!" />
      <ProductGallery products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    paddingBottom: 74
  }
});

export default ProductGalleryScreen;
