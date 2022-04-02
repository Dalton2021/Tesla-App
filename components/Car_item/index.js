import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import Styled_btn from "../Styled_btn";

function Car_item({ name, tagline, image, tagline_CTA }) {
  return (
    <View style={styles.car_container}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}&nbsp;
          <Text style={styles.subtitle_CTA}>{tagline_CTA}</Text>
        </Text>
      </View>
      <View style={styles.btn_container}>
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
    </View>
  );
}

export default Car_item;
