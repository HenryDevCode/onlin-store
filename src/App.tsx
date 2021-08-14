/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderNavigation from "./components/HeaderNavigation";
import FooterNavigation from "./components/FooterNavigation";
import CartScreen from "./screens/CartScreen";
import ProductGalleryScreen from "./screens/ProductGalleryScreen";

// Your products array and TS Type are available here.
import products, { IProduct } from "./constants/products";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState("main");

  /**
   * Update this to be dynamically tracked using whatever
   * method you think is best. This can be using context
   * (preferrable) or through passing props.
   */
  const cartProducts: IProduct[] = [];

  let content = <ProductGalleryScreen products={products} />;
  if (currentScreen === "cart") {
    content = <CartScreen cartProducts={cartProducts} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation />
      {content}
      <FooterNavigation
        homeNavegationHandler={() => setCurrentScreen("main")}
        cartNavegationHandler={() => setCurrentScreen("cart")}
        cartAmount={0}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
