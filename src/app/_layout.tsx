import { SavedEventsProvider } from "@/context/SavedEventsContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
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
