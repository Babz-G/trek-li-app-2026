import { Image, StyleSheet } from "react-native";

export default function ScreenHeader() {
  return (
    <Image
      source={require("@/assets/images/welcome-to-risa-banner.png")}
      style={styles.banner}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#f652a0",
  },
});
