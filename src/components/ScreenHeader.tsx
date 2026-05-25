import { Image, StyleSheet } from "react-native";

export default function ScreenHeader() {
  return (
    <Image
      source={require("@/assets/images/welcome-to-risa-banner.png")}
      style={styles.banner}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#f652a0",
  },
});
