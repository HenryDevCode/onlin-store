/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { Text } from "react-native";

interface Props {
  style?: {};
  children: React.ReactNode;
}

const Strong: React.FC<Props> = ({ style, children }) => {
  return <Text style={{ fontWeight: "bold", ...style }}>{children}</Text>;
};

export default Strong;
