import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },

  menu: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
});

export default styles;
