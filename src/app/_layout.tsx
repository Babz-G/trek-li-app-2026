import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
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
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="schedule" options={{ title: "Schedule" }} />
      <Tabs.Screen name="my-schedule" options={{ title: "My Schedule" }} />
      <Tabs.Screen name="guests" options={{ title: "Guests" }} />
      <Tabs.Screen name="info" options={{ title: "Info" }} />
    </Tabs>
  );
}
