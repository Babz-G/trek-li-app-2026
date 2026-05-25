import { useThemeContext } from "@/context/ThemeContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenHeader() {
  const theme = useTheme();
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <Image
        source={require("@/assets/images/welcome-to-risa-banner.png")}
        style={[styles.banner, { backgroundColor: theme.background }]}
        resizeMode="contain"
        accessibilityLabel="Welcome to Risa, Trek Long Island 2026 banner"
        accessibilityRole="image"
      />
      <TouchableOpacity
        style={styles.pill}
        onPress={toggleTheme}
        accessibilityLabel={
          isDark ? "Switch to light mode" : "Switch to dark mode"
        }
        accessibilityRole="button"
      >
        <MaterialCommunityIcons
          name={isDark ? "weather-sunny" : "weather-night"}
          size={15}
          color={isDark ? "#f3ba48" : "#3f64f0"}
        />
        <Text
          style={[styles.pillText, { color: isDark ? "#f3ba48" : "#3f64f0" }]}
        >
          {isDark ? "Light" : "Dark"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  pill: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  pillText: {
    fontSize: 13,
    fontFamily: "LeagueSpartan_700Bold",
  },
});
