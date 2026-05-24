import "@/global.css";
import { Platform } from "react-native";

export const TrekColors = {
  magenta: "#f652a0",
  teal: "#009d9a",
  lightTeal: "#36c3de",
  gold: "#f3ba48",
  brightGold: "#ffc606",
  green: "#63fb64",
  orange: "#ffa503",
  red: "#e0646e",
  blue: "#3f64f0",
  slateBlue: "#3f7590",
  black: "#000000",
  white: "#ffffff",
  offWhite: "#f7f7f7",
} as const;

export const Colors = {
  light: {
    text: "#000000",
    textSecondary: "#3f7590",
    background: "#f7f7f7",
    backgroundElement: "#ffffff",
    backgroundSelected: "#36c3de22",
    accent: "#009d9a",
    accentSecondary: "#f652a0",
    tabBar: "#ffffff",
    tabBarActive: "#009d9a",
    tabBarInactive: "#3f7590",
    card: "#ffffff",
    border: "#36c3de",
    conflict: "#e0646e",
    saved: "#63fb64",
  },
  dark: {
    text: "#ffffff",
    textSecondary: "#36c3de",
    background: "#000000",
    backgroundElement: "#111111",
    backgroundSelected: "#009d9a33",
    accent: "#009d9a",
    accentSecondary: "#f652a0",
    tabBar: "#000000",
    tabBarActive: "#f652a0",
    tabBarInactive: "#3f7590",
    card: "#111111",
    border: "#009d9a",
    conflict: "#e0646e",
    saved: "#63fb64",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
