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
    <ScrollView style={styles.container}>
      <Image
        source={require("@/assets/images/welcome-to-risa-banner.png")}
        style={styles.banner}
        resizeMode="cover"
      />
      <View style={styles.infoSection}>
        <Text style={styles.dates}>June 12 - 14, 2026</Text>
        <Text style={styles.venue}>
          Hyatt Regency Long Island{"\n"}1717 Motor Pkwy, Hauppauge, NY
        </Text>
        <TouchableOpacity
          style={styles.ticketBtn}
          onPress={() =>
            Linking.openURL("http://treklongislandtickets.square.site/")
          }
        >
          <Text style={styles.ticketBtnText}>Purchase Tickets</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hoursSection}>
        <Text style={styles.sectionTitle}>Convention Hours</Text>
        <Text style={styles.hoursText}>Friday: 5:00 PM - 11:00 PM</Text>
        <Text style={styles.hoursText}>Saturday: 10:00 AM - 12:00 AM</Text>
        <Text style={styles.hoursText}>Sunday: 10:00 AM - 6:00 PM</Text>
      </View>
      <View style={styles.sponsorSection}>
        <Text style={styles.sponsorLabel}>App Sponsored by</Text>
        <Image
          source={require("@/assets/images/transporter-room-logo.jpeg")}
          style={styles.sponsorLogo}
          resizeMode="contain"
        />
        <Text style={styles.sponsorName}>The Transporter Room Podcast</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://thetransporterroom.net")}
        >
          <Text style={styles.sponsorLink}>thetransporterroom.net</Text>
        </TouchableOpacity>
      </View>
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
    padding: 24,
    gap: 12,
  },
  dates: {
    color: "#f3ba48",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  venue: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  ticketBtn: {
    backgroundColor: "#f652a0",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 8,
  },
  ticketBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  hoursSection: {
    padding: 24,
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    color: "#009d9a",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  hoursText: {
    color: "#ffffff",
    fontSize: 15,
  },
  sponsorSection: {
    alignItems: "center",
    padding: 24,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  sponsorLabel: {
    color: "#888888",
    fontSize: 13,
  },
  sponsorLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  sponsorName: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  sponsorLink: {
    color: "#009d9a",
    fontSize: 14,
  },
});
