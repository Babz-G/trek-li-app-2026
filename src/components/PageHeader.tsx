import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top + 12 }]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  title: {
    fontSize: 34,
    fontFamily: "LeagueSpartan_700Bold",
    color: "#f652a0",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    color: "#888888",
    marginTop: 2,
  },
  accent: {
    marginTop: 8,
    width: 48,
    height: 2,
    borderRadius: 1,
    backgroundColor: "#009d9a",
  },
});
