import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image
        source={require("@/assets/images/welcome-to-risa-banner.png")}
        style={styles.banner}
        resizeMode="cover"
      />

      <View style={styles.infoSection}>
        <Text style={styles.dates}>June 12 – 14, 2026</Text>
        <View style={styles.divider} />
        <Text style={styles.venue}>Hyatt Regency Long Island</Text>
        <Text style={styles.venueAddress}>1717 Motor Pkwy, Hauppauge, NY</Text>
        <TouchableOpacity
          style={styles.ticketBtn}
          onPress={() =>
            Linking.openURL("http://treklongislandtickets.square.site/")
          }
          activeOpacity={0.8}
        >
          <Text style={styles.ticketBtnText}>🎟 Purchase Tickets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Convention Hours</Text>
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
        <Text style={styles.sponsorLabel}>App Sponsored By</Text>
        <Image
          source={require("@/assets/images/transporter-room-logo.jpeg")}
          style={styles.sponsorLogo}
          resizeMode="contain"
        />
        <Text style={styles.sponsorName}>The Transporter Room Podcast</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://thetransporterroom.net")}
          activeOpacity={0.7}
        >
          <Text style={styles.sponsorLink}>thetransporterroom.net</Text>
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
    aspectRatio: 2.7,
  },
  infoSection: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 8,
    gap: 8,
  },
  dates: {
    color: "#f3ba48",
    fontSize: 28,
    fontFamily: "LeagueSpartan_700Bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: "#f652a0",
    borderRadius: 2,
    marginVertical: 4,
  },
  venue: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "LeagueSpartan_700Bold",
    textAlign: "center",
  },
  venueAddress: {
    color: "#888888",
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    textAlign: "center",
  },
  ticketBtn: {
    backgroundColor: "#f652a0",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 12,
    shadowColor: "#f652a0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  ticketBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "LeagueSpartan_700Bold",
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#111111",
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#222222",
    maxWidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  cardTitle: {
    color: "#009d9a",
    fontSize: 18,
    fontFamily: "LeagueSpartan_700Bold",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  hoursRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 8,
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
  sponsorLabel: {
    color: "#888888",
    fontSize: 11,
    fontFamily: "NotoSans_400Regular",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  sponsorLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  sponsorName: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "LeagueSpartan_700Bold",
    textAlign: "center",
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
