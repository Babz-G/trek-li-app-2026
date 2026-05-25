import { useTheme } from "@/hooks/use-theme";
import { Image, StyleSheet } from "react-native";

export default function ScreenHeader() {
  const theme = useTheme();

  return (
    <Image
      source={require("@/assets/images/welcome-to-risa-banner.png")}
      style={[
        styles.banner,
        {
          backgroundColor: theme.background,
          borderBottomColor: theme.accentSecondary,
        },
      ]}
      resizeMode="contain"
      accessibilityLabel="Welcome to Risa, Trek Long Island 2026 banner"
      accessibilityRole="image"
    />
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    borderBottomWidth: 1,
  },
});
