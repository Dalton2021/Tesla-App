import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  car_container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },

  btn_container: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 15,
    color: "#5c5e62",
    textTransform: "capitalize",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  subtitle_CTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
