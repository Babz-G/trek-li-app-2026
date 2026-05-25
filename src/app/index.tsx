import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ── Stardate Calculator ───────────────────────────────────────
function getStardate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const dayOfYear = Math.ceil(
    (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysInYear = year % 4 === 0 ? 366 : 365;
  const hourFraction = Math.floor((now.getHours() / 24) * 10);
  const base =
    (year - 2000) * 1000 + Math.round((dayOfYear / daysInYear) * 1000);
  return `${base}.${hourFraction}`;
}

export default function HomeScreen() {
  const stardate = getStardate();

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image
        source={require("@/assets/images/welcome-to-risa-banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />

      {/* ── Stardate + Slogan ── */}
      <View style={styles.stardateRow}>
        <Text style={styles.stardateText}>🖖 Stardate {stardate}</Text>
        <Text style={styles.sloganText}>
          Boldly going where no con has gone before
        </Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="calendar" size={20} color="#f652a0" />
          <Text style={styles.infoText}>June 12 – 14, 2026</Text>
        </View>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="map-marker" size={20} color="#f652a0" />
          <View>
            <Text style={styles.infoText}>Hyatt Regency Long Island</Text>
            <Text style={styles.infoSubText}>
              1717 Motor Pkwy, Hauppauge, NY
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.ticketBtn}
        onPress={() =>
          Linking.openURL("http://treklongislandtickets.square.site/")
        }
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons name="ticket" size={22} color="#ffffff" />
        <Text style={styles.ticketBtnText}>Purchase Tickets</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={18}
            color="#009d9a"
          />
          <Text style={styles.cardTitle}>Convention Hours</Text>
        </View>
        <View style={styles.hoursRow}>
          <Text style={styles.hoursDay}>Friday</Text>
          <Text style={styles.hoursTime}>5:00 PM – 11:00 PM</Text>
        </View>
        <View style={styles.hoursRow}>
          <Text style={styles.hoursDay}>Saturday</Text>
          <Text style={styles.hoursTime}>10:00 AM – 12:00 AM</Text>
        </View>
        <View style={styles.hoursRow}>
          <Text style={styles.hoursDay}>Sunday</Text>
          <Text style={styles.hoursTime}>10:00 AM – 6:00 PM</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons
            name="star-circle"
            size={18}
            color="#009d9a"
          />
          <Text style={styles.cardTitle}>App Sponsored By</Text>
        </View>
        <TouchableOpacity
          style={styles.sponsorRow}
          onPress={() => Linking.openURL("https://thetransporterroom.net")}
          activeOpacity={0.7}
        >
          <Image
            source={require("@/assets/images/transporter-room-logo.jpeg")}
            style={styles.sponsorLogo}
            resizeMode="contain"
          />
          <View style={styles.sponsorInfo}>
            <Text style={styles.sponsorName}>The Transporter Room Podcast</Text>
            <Text style={styles.sponsorLink}>thetransporterroom.net ›</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#000000",
  },
  stardateRow: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 4,
  },
  stardateText: {
    color: "#009d9a",
    fontSize: 13,
    fontFamily: "LeagueSpartan_700Bold",
    letterSpacing: 1.5,
  },
  sloganText: {
    color: "#777777",
    fontSize: 12,
    fontFamily: "NotoSans_400Regular",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#111111",
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  infoDivider: {
    height: 1,
    backgroundColor: "#222222",
  },
  infoText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "LeagueSpartan_700Bold",
  },
  infoSubText: {
    color: "#888888",
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    marginTop: 2,
  },
  ticketBtn: {
    backgroundColor: "#f652a0",
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#f652a0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  ticketBtnText: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "LeagueSpartan_700Bold",
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#111111",
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  cardTitle: {
    color: "#009d9a",
    fontSize: 16,
    fontFamily: "LeagueSpartan_700Bold",
  },
  hoursRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  hoursDay: {
    color: "#f652a0",
    fontSize: 14,
    fontFamily: "LeagueSpartan_700Bold",
  },
  hoursTime: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
  },
  sponsorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  sponsorLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  sponsorInfo: {
    flex: 1,
  },
  sponsorName: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "LeagueSpartan_700Bold",
    marginBottom: 4,
  },
  sponsorLink: {
    color: "#009d9a",
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
  },
  bottomSpacer: {
    height: 32,
  },
});
