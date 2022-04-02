import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import Styled_btn from "../Styled_btn";

function Car_item(props) {
  return (
    <View style={styles.car_container}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $72,000</Text>
      </View>
      <Styled_btn
        type="primary"
        on_press={() => {
          console.warn("Custom Order was pressed");
        }}
      />
      <Styled_btn
        type="secondary"
        on_press={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
}

export default Car_item;
