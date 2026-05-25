import { scheduleData, ScheduleEvent } from "@/data/scheduleData";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TABS = ["Friday", "Saturday", "Sunday", "Photo Ops"] as const;
type Tab = (typeof TABS)[number];

const TAB_COLORS: Record<Tab, string> = {
  Friday: "#f652a0",
  Saturday: "#009d9a",
  Sunday: "#3f64f0",
  "Photo Ops": "#63fb64",
};

export default function ScheduleScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("Friday");

  const filtered =
    activeTab === "Photo Ops"
      ? scheduleData.filter((e) => e.location === "Photo Studio")
      : scheduleData.filter((e) => e.day === activeTab);

  const renderEvent = ({ item }: { item: ScheduleEvent }) => (
    <View style={styles.card}>
      <Text style={[styles.time, { color: TAB_COLORS[activeTab] }]}>
        {item.time}
      </Text>
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabRow}
        >
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                { borderColor: TAB_COLORS[tab] },
                activeTab === tab && { backgroundColor: TAB_COLORS[tab] },
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: TAB_COLORS[tab] },
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 50,
  },
  tabWrapper: {
    height: 56,
    justifyContent: "center",
    marginBottom: 8,
  },
  tabRow: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  tabTextActive: {
    color: "#000000",
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  time: {
    fontSize: 13,
    fontWeight: "bold",
    width: 70,
    paddingTop: 2,
  },
  cardDetails: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  location: {
    color: "#888888",
    fontSize: 12,
  },
});
