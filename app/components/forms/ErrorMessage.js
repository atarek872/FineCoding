import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

import Text from "../Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: colors.whiteBrown , fontSize:15 },
});

export default ErrorMessage;
