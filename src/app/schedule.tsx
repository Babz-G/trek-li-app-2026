import ScreenHeader from "@/components/ScreenHeader";
import { scheduleData, ScheduleEvent } from "@/data/scheduleData";
import { useSavedEvents } from "@/hooks/useSavedEvents";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  const { toggleSave, isSaved } = useSavedEvents();

  const filtered =
    activeTab === "Photo Ops"
      ? scheduleData.filter((e) => e.location === "Photo Studio")
      : scheduleData.filter((e) => e.day === activeTab);

  const renderEvent = ({ item }: { item: ScheduleEvent }) => {
    const saved = isSaved(item.id);

    // A conflict exists if there's a DIFFERENT already-saved event
    // on the same day at the same time
    const wouldConflict =
      !saved &&
      scheduleData.some(
        (e) =>
          e.id !== item.id &&
          e.day === item.day &&
          e.time === item.time &&
          isSaved(e.id)
      );

    return (
      <View style={[styles.card, wouldConflict && styles.cardConflict]}>
        <Text style={[styles.time, { color: TAB_COLORS[activeTab] }]}>
          {item.time}
        </Text>
        <View style={styles.cardDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          {wouldConflict && (
            <View style={styles.conflictRow}>
              <MaterialCommunityIcons name="alert" size={11} color="#ff9500" />
              <Text style={styles.conflictText}>
                Conflicts with a saved event
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => toggleSave(item.id)}
          style={styles.bookmarkButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <MaterialCommunityIcons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={saved ? "#f652a0" : wouldConflict ? "#ff9500" : "#555555"}
          />
          <Text
            style={[
              styles.bookmarkLabel,
              saved && styles.bookmarkLabelSaved,
              wouldConflict && styles.bookmarkLabelConflict,
            ]}
          >
            {saved ? "Saved" : wouldConflict ? "Conflict" : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenHeader />
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
    fontFamily: "LeagueSpartan_700Bold",
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
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    gap: 12,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  cardConflict: {
    borderColor: "#ff9500",
  },
  time: {
    fontSize: 13,
    fontFamily: "LeagueSpartan_700Bold",
    width: 70,
    paddingTop: 2,
  },
  cardDetails: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "LeagueSpartan_700Bold",
    marginBottom: 4,
  },
  location: {
    color: "#888888",
    fontSize: 12,
    fontFamily: "NotoSans_400Regular",
  },
  conflictRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 5,
  },
  conflictText: {
    color: "#ff9500",
    fontSize: 11,
    fontFamily: "NotoSans_400Regular",
  },
  bookmarkButton: {
    alignItems: "center",
    gap: 2,
  },
  bookmarkLabel: {
    fontSize: 9,
    color: "#555555",
    fontFamily: "NotoSans_400Regular",
  },
  bookmarkLabelSaved: {
    color: "#f652a0",
  },
  bookmarkLabelConflict: {
    color: "#ff9500",
  },
});
