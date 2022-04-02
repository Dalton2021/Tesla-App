import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const Styled_Btn = ({ type, on_press }) => {
  const background_color = type === "primary" ? "#171A20cc" : "#ffffffa6";
  const font_color = type === "primary" ? "#ffffff" : "#171a20";

  const text = type === "primary" ? "Custom Order" : "Existing Inventory";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: background_color }]}
        onPress={on_press}
      >
        <Text style={[styles.text, { color: font_color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Styled_Btn;
