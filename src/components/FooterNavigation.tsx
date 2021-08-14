/* eslint-disable @typescript-eslint/no-use-before-define, jsx-a11y/accessible-emoji */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import Strong from "./Strong";

interface Props {
  homeNavegationHandler: () => void;
  cartNavegationHandler: () => void;
  cartAmount: number;
}

const FooterNavigation: React.FC<Props> = ({
  homeNavegationHandler,
  cartNavegationHandler,
  cartAmount
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={homeNavegationHandler}
        >
          <Strong>🏠 Home</Strong>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={cartNavegationHandler}
        >
          <Strong>🛒 Cart {cartAmount > 0 ? `(${cartAmount})` : ""}</Strong>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    rigth: 0,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%"
  },
  navButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navButton: {
    paddingVertical: 15
  },
  verticleLine: {
    borderLeftWidth: 1,
    borderLeftColor: colors.menuVerticalLine
  }
});

export default FooterNavigation;
