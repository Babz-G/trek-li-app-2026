import ScreenHeader from "@/components/ScreenHeader";
import { scheduleData, ScheduleEvent } from "@/data/scheduleData";
import { useTheme } from "@/hooks/use-theme";
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

const TABS = [
  "Friday",
  "Saturday",
  "Sunday",
  "Photo Ops",
  "Gaming",
  "Kids",
] as const;
type Tab = (typeof TABS)[number];

const TAB_COLORS: Record<Tab, string> = {
  Friday: "#f652a0",
  Saturday: "#009d9a",
  Sunday: "#3f64f0",
  "Photo Ops": "#63fb64",
  Gaming: "#f3ba48",
  Kids: "#ff8c42",
};

type ExtendedEvent = ScheduleEvent & {
  isDivider?: boolean;
  dividerLabel?: string;
};

export default function ScheduleScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("Friday");
  const { toggleSave, isSaved } = useSavedEvents();
  const theme = useTheme();

  const getFilteredData = (): ExtendedEvent[] => {
    if (activeTab === "Photo Ops") {
      const photoOps = scheduleData.filter(
        (e) => e.location === "Photo Studio"
      );
      const result: ExtendedEvent[] = [];
      let lastDay: string | null = null;
      for (const event of photoOps) {
        if (lastDay !== event.day) {
          result.push({
            id: `divider-${event.day}`,
            time: "",
            title: event.day,
            location: "divider",
            day: event.day,
            isDivider: true,
            dividerLabel: event.day,
          });
          lastDay = event.day;
        }
        result.push(event);
      }
      return result;
    }

    if (activeTab === "Gaming") {
      const gaming = scheduleData.filter((e) => e.category === "gaming");
      const result: ExtendedEvent[] = [];
      let lastDay: string | null = null;
      for (const event of gaming) {
        if (lastDay !== event.day) {
          result.push({
            id: `divider-gaming-${event.day}`,
            time: "",
            title: event.day,
            location: "divider",
            day: event.day,
            isDivider: true,
            dividerLabel: event.day,
          });
          lastDay = event.day;
        }
        result.push(event);
      }
      return result;
    }

    if (activeTab === "Kids") {
      const kids = scheduleData.filter((e) => e.category === "kids");
      const result: ExtendedEvent[] = [];
      let lastDay: string | null = null;
      for (const event of kids) {
        if (lastDay !== event.day) {
          result.push({
            id: `divider-kids-${event.day}`,
            time: "",
            title: event.day,
            location: "divider",
            day: event.day,
            isDivider: true,
            dividerLabel: event.day,
          });
          lastDay = event.day;
        }
        result.push(event);
      }
      return result;
    }

    // Friday, Saturday, Sunday -- show everything for that day chronologically
    return scheduleData.filter((e) => e.day === activeTab);
  };

  const filtered = getFilteredData();

  const activeColor =
    activeTab === "Photo Ops" || activeTab === "Gaming" || activeTab === "Kids"
      ? TAB_COLORS[activeTab]
      : TAB_COLORS[activeTab];

  const renderEvent = ({ item }: { item: ExtendedEvent }) => {
    if (item.isDivider) {
      return (
        <View
          style={[
            styles.dayDivider,
            { backgroundColor: TAB_COLORS[activeTab] },
          ]}
        >
          <Text style={styles.dayDividerText}>{item.dividerLabel}</Text>
        </View>
      );
    }

    const saved = isSaved(item.id);
    const timeColor = TAB_COLORS[activeTab];

    return (
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.time, { color: timeColor }]}>{item.time}</Text>
        <View style={styles.cardDetails}>
          <Text style={[styles.title, { color: theme.text }]}>
            {item.title}
          </Text>
          <Text style={[styles.location, { color: theme.subtext }]}>
            {item.location}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleSave(item.id)}
          style={styles.bookmarkButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityLabel={
            saved
              ? `Remove ${item.title} from my schedule`
              : `Save ${item.title} to my schedule`
          }
          accessibilityRole="button"
        >
          <MaterialCommunityIcons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={saved ? "#f652a0" : theme.subtext}
          />
          <Text
            style={[styles.bookmarkLabel, saved && styles.bookmarkLabelSaved]}
          >
            {saved ? "Saved" : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
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
              accessibilityLabel={`${tab} schedule`}
              accessibilityRole="tab"
              accessibilityState={{ selected: activeTab === tab }}
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
  container: { flex: 1 },
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
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    gap: 12,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  time: {
    fontSize: 13,
    fontFamily: "LeagueSpartan_700Bold",
    width: 70,
    paddingTop: 2,
  },
  cardDetails: { flex: 1 },
  title: {
    fontSize: 14,
    fontFamily: "LeagueSpartan_700Bold",
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
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
  bookmarkLabelSaved: { color: "#f652a0" },
  dayDivider: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  dayDividerText: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "LeagueSpartan_700Bold",
  },
});
