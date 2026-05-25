import { SavedEventsProvider } from "@/context/SavedEventsContext";
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
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [bangersLoaded] = useBangers({ Bangers_400Regular });
  const [candalLoaded] = useCandal({ Candal_400Regular });
  const [notoLoaded] = useNotoSans({ NotoSans_400Regular, NotoSans_700Bold });
  const [spartanLoaded] = useLeagueSpartan({
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });

  const fontsLoaded =
    bangersLoaded && candalLoaded && notoLoaded && spartanLoaded;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SavedEventsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "#f652a0",
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: "#f652a0",
          tabBarInactiveTintColor: "#888888",
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
              <MaterialCommunityIcons
                name="calendar"
                color={color}
                size={size}
              />
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
            title: "Info",
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
    </SavedEventsProvider>
  );
}
