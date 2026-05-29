import { useTheme } from "@/hooks/use-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    emoji: "🖖",
    title: "Welcome to Risa.",
    body: "Trek Long Island 2026 is your official companion app for Long Island's premier Star Trek convention, June 12-14 at the Hyatt Regency Long Island.",
  },
  {
    id: "2",
    emoji: "📅",
    title: "Build Your Schedule.",
    body: "Save events directly to your device. Get automatic warnings when two events overlap so you never double-book yourself.",
  },
  {
    id: "3",
    emoji: "📱",
    title: "Works Offline.",
    body: "Your saved schedule, guest info, and event details are available even without a wifi connection. Your data stays on your device.",
  },
];

export const ONBOARDING_KEY = "hasSeenOnboarding";

type Props = {
  onDone: () => void;
};

export default function OnboardingScreen({ onDone }: Props) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      const nextIndex = activeIndex + 1;
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setActiveIndex(nextIndex);
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleGetStarted = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
    onDone();
  };

  const isLast = activeIndex === SLIDES.length - 1;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {SLIDES.map((item) => (
          <View key={item.id} style={[styles.slide, { width }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.title, { color: theme.text }]}>
              {item.title}
            </Text>
            <Text style={[styles.body, { color: theme.subtext }]}>
              {item.body}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        {isLast ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleGetStarted}
            accessibilityLabel="Get started with the app"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            accessibilityLabel="Next slide"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}

        {!isLast && (
          <TouchableOpacity
            onPress={handleGetStarted}
            accessibilityLabel="Skip onboarding"
            accessibilityRole="button"
          >
            <Text style={[styles.skip, { color: theme.subtext }]}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 24,
  },
  emoji: {
    fontSize: 72,
  },
  title: {
    fontSize: 32,
    fontFamily: "LeagueSpartan_700Bold",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    fontFamily: "NotoSans_400Regular",
    textAlign: "center",
    lineHeight: 26,
  },
  footer: {
    paddingBottom: 60,
    paddingHorizontal: 40,
    alignItems: "center",
    gap: 16,
  },
  dots: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: "#f652a0",
    width: 24,
  },
  dotInactive: {
    backgroundColor: "#555555",
  },
  button: {
    backgroundColor: "#f652a0",
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "LeagueSpartan_700Bold",
  },
  skip: {
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
  },
});
