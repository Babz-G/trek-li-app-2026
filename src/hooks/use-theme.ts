import { Colors } from "@/constants/theme";
import { useThemeContext } from "@/context/ThemeContext";

export function useTheme() {
  const { isDark } = useThemeContext();
  return Colors[isDark ? "dark" : "light"];
}
