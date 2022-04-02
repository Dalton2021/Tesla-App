import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Car_item from "./components/Car_item";

export default function App() {
  return (
    <View style={styles.container}>
      <Car_item
        name="Model S"
        tag_line_CTA="Touchless Delivery"
        tag_line="Order online for"
        image={require("./assets/images/ModelX.jpeg")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
