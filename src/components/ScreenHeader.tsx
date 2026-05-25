import { Image, StyleSheet, View } from "react-native";

export default function ScreenHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/images/welcome-to-risa-banner.png")}
        style={styles.banner}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#f652a0",
  },
  banner: {
    width: "100%",
    aspectRatio: 2.7,
  },
});
