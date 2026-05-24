import {
  TabList,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from "expo-router/ui";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: "100%" }} />
      <TabList asChild>
        <View style={styles.tabBar}>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="schedule" href="/schedule" asChild>
            <TabButton>Schedule</TabButton>
          </TabTrigger>
          <TabTrigger name="my-schedule" href="/my-schedule" asChild>
            <TabButton>My Schedule</TabButton>
          </TabTrigger>
          <TabTrigger name="guests" href="/guests" asChild>
            <TabButton>Guests</TabButton>
          </TabTrigger>
          <TabTrigger name="info" href="/info" asChild>
            <TabButton>Info</TabButton>
          </TabTrigger>
        </View>
      </TabList>
    </Tabs>
  );
}

function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={styles.tab}>
      <Text style={[styles.tabText, isFocused && styles.tabTextActive]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderTopWidth: 1,
    borderTopColor: "#f652a0",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  tab: {
    alignItems: "center",
    paddingHorizontal: 12,
  },
  tabText: {
    color: "#888888",
    fontSize: 13,
  },
  tabTextActive: {
    color: "#f652a0",
    fontWeight: "bold",
  },
});
