/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
  children?: React.ReactNode;
}

const Masthead: React.FC<Props> = ({ text, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{text}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingTop: 26,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontWeight: "700",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "black"
  }
});

export default Masthead;
