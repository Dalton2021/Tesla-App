import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import Car_item from "../Car_item/index";

const Cars_list = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <Car_item
            name={item.name}
            tagline={item.tagline}
            image={item.image}
            tagline_CTA={item?.tagline_CTA}
          />
        )}
      />
    </View>
  );
};

export default Cars_list;
