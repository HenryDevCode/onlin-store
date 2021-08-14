/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, StyleSheet } from "react-native";

import FinderLogo from "./FinderLogo";

const HeaderNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <FinderLogo height={40} width={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center"
  }
});

export default HeaderNavigation;
