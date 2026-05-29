import OnboardingScreen, {
  ONBOARDING_KEY,
} from "@/components/OnboardingScreen";
import { SavedEventsProvider } from "@/context/SavedEventsContext";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";
import {
  Bangers_400Regular,
  useFonts as useBangers,
} from "@expo-google-fonts/bangers";
import {
  Candal_400Regular,
  useFonts as useCandal,
} from "@expo-google-fonts/candal";
import {
  LeagueSpartan_400Regular,
  LeagueSpartan_700Bold,
  useFonts as useLeagueSpartan,
} from "@expo-google-fonts/league-spartan";
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts as useNotoSans,
} from "@expo-google-fonts/noto-sans";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

function TabsLayout() {
  const { isDark } = useThemeContext();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#000000" : "#ffffff",
          borderTopColor: "#f652a0",
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "#f652a0",
        tabBarInactiveTintColor: isDark ? "#888888" : "#3f7590",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-schedule"
        options={{
          title: "My Schedule",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-star"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="guests"
        options={{
          title: "Guests",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info & Tix",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  const [bangersLoaded] = useBangers({ Bangers_400Regular });
  const [candalLoaded] = useCandal({ Candal_400Regular });
  const [notoLoaded] = useNotoSans({ NotoSans_400Regular, NotoSans_700Bold });
  const [spartanLoaded] = useLeagueSpartan({
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(
    null
  );

  const fontsLoaded =
    bangersLoaded && candalLoaded && notoLoaded && spartanLoaded;

  useEffect(() => {
    AsyncStorage.getItem(ONBOARDING_KEY).then((value) => {
      setHasSeenOnboarding(false); // temporary: force onboarding for testing
    });
  }, []);

  useEffect(() => {
    if (fontsLoaded && hasSeenOnboarding !== null) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, hasSeenOnboarding]);

  if (!fontsLoaded || hasSeenOnboarding === null) return null;

  if (!hasSeenOnboarding) {
    return (
      <ThemeProvider>
        <OnboardingScreen onDone={() => setHasSeenOnboarding(true)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <SavedEventsProvider>
        <TabsLayout />
      </SavedEventsProvider>
    </ThemeProvider>
  );
}
