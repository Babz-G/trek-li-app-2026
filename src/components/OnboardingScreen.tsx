import { useTheme } from "@/hooks/use-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
    title: "Schedule & My Schedule.",
    body: "Browse the full convention schedule and save events you want to attend. View your personal lineup in the My Schedule tab. You'll get an automatic warning if two events overlap.",
  },
  {
    id: "3",
    emoji: "⭐",
    title: "Guests.",
    body: "Browse celebrity guests, artists and industry professionals, authors, IDIC track guests and panelists, and entertainment artists all in one place.",
  },
  {
    id: "4",
    emoji: "🎟️",
    title: "Info & Tickets.",
    body: "Purchase tickets to special ticketed events and photo ops. Find convention hours, vendor info, social links, and everything else you need for the weekend.",
  },
];

export const ONBOARDING_KEY = "hasSeenOnboarding";

type Props = {
  onDone: () => void;
};

export default function OnboardingScreen({ onDone }: Props) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleGetStarted = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
    onDone();
  };

  const handleTouchStart = (e: GestureResponderEvent) => {
    setTouchStartX(e.nativeEvent.pageX);
  };

  const handleTouchEnd = (e: GestureResponderEvent) => {
    const diff = touchStartX - e.nativeEvent.pageX;
    if (diff > 50) handleNext();
    if (diff < -50) handleBack();
  };

  const isLast = activeIndex === SLIDES.length - 1;
  const slide = SLIDES[activeIndex];

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background }]}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <View style={styles.slideContainer}>
        <Text style={styles.emoji}>{slide.emoji}</Text>
        <Text style={[styles.title, { color: theme.text }]}>{slide.title}</Text>
        <Text style={[styles.body, { color: theme.subtext }]}>
          {slide.body}
        </Text>
      </View>

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

        <TouchableOpacity
          style={styles.button}
          onPress={isLast ? handleGetStarted : handleNext}
          accessibilityLabel={
            isLast ? "Get started with the app" : "Next slide"
          }
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>
            {isLast ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>

        <View style={styles.skipContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  slideContainer: {
    flex: 1,
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
  skipContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  skip: {
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
  },
});
