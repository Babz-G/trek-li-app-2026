import ScreenHeader from "@/components/ScreenHeader";
import { scheduleData } from "@/data/scheduleData";
import { useSavedEvents } from "@/hooks/useSavedEvents";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DAY_COLORS: Record<string, string> = {
  Friday: "#f652a0",
  Saturday: "#009d9a",
  Sunday: "#3f64f0",
};

const DAY_ORDER = ["Friday", "Saturday", "Sunday"];

export default function MyScheduleScreen() {
  const { savedIds, toggleSave } = useSavedEvents();

  const savedEvents = scheduleData.filter((e) => savedIds.has(e.id));

  // Find all saved event IDs that share a day+time with another saved event
  const conflictingIds = new Set<string>();
  for (let i = 0; i < savedEvents.length; i++) {
    for (let j = i + 1; j < savedEvents.length; j++) {
      if (
        savedEvents[i].day === savedEvents[j].day &&
        savedEvents[i].time === savedEvents[j].time
      ) {
        conflictingIds.add(savedEvents[i].id);
        conflictingIds.add(savedEvents[j].id);
      }
    }
  }

  if (savedEvents.length === 0) {
    return (
      <View style={styles.container}>
        <ScreenHeader />
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={64}
            color="#333333"
          />
          <Text style={styles.emptyTitle}>No events saved yet</Text>
          <Text style={styles.emptySubtitle}>
            Tap the bookmark icon on any event in the Schedule tab to add it
            here.
          </Text>
        </View>
      </View>
    );
  }

  const grouped = DAY_ORDER.reduce<Record<string, typeof savedEvents>>(
    (acc, day) => {
      const events = savedEvents.filter((e) => e.day === day);
      if (events.length > 0) acc[day] = events;
      return acc;
    },
    {}
  );

  const sections = Object.entries(grouped);

  return (
    <View style={styles.container}>
      <ScreenHeader />
      <FlatList
        data={sections}
        keyExtractor={([day]) => day}
        contentContainerStyle={styles.list}
        renderItem={({ item: [day, events] }) => (
          <View>
            <Text style={[styles.dayHeader, { color: DAY_COLORS[day] }]}>
              {day}
            </Text>
            {events.map((event) => {
              const hasConflict = conflictingIds.has(event.id);
              return (
                <View
                  key={event.id}
                  style={[styles.card, hasConflict && styles.cardConflict]}
                >
                  <Text style={[styles.time, { color: DAY_COLORS[event.day] }]}>
                    {event.time}
                  </Text>
                  <View style={styles.cardDetails}>
                    <Text style={styles.title}>{event.title}</Text>
                    <Text style={styles.location}>{event.location}</Text>
                    {hasConflict && (
                      <View style={styles.conflictRow}>
                        <MaterialCommunityIcons
                          name="alert"
                          size={11}
                          color="#ff9500"
                        />
                        <Text style={styles.conflictText}>Time conflict</Text>
                      </View>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => toggleSave(event.id)}
                    style={styles.unsaveButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <MaterialCommunityIcons
                      name="bookmark-remove"
                      size={22}
                      color="#555555"
                    />
                    <Text style={styles.unsaveLabel}>Remove</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    gap: 16,
  },
  emptyTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "LeagueSpartan_700Bold",
    textAlign: "center",
  },
  emptySubtitle: {
    color: "#666666",
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
    textAlign: "center",
    lineHeight: 22,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  dayHeader: {
    fontSize: 18,
    fontFamily: "LeagueSpartan_700Bold",
    marginTop: 20,
    marginBottom: 10,
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
  unsaveButton: {
    alignItems: "center",
    gap: 2,
  },
  unsaveLabel: {
    fontSize: 9,
    color: "#555555",
    fontFamily: "NotoSans_400Regular",
  },
});
