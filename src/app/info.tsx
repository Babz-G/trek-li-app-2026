import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TICKETED_EVENTS = [
  {
    title: "Luau with the Stars",
    details: "Saturday June 13 • 6:00 PM • Terrace Ballroom",
    price: "$100 includes buffet",
    note: "Bonnie Gordon, Cat Smith & Lawrence Neals performing with celebrity guests",
    url: "https://treklongislandtickets.square.site/product/risa-luau-cocktails-across-the-final-frontier/ASNL2QBQCXUZA23COJZWP77Q?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Slut Trek Burlesque Show 🔞",
    details: "Saturday June 13 • 8:30 PM • Windwatch • Ages 21+ ID Required",
    price: "$15",
    note: "Tickets available at the door only",
    url: null,
    soldOut: false,
  },
  {
    title: "Glass Etching Workshop with Nicole de Boer",
    details: "Saturday June 13 • 2:00 PM",
    price: "$80",
    url: null,
    soldOut: false,
  },
  {
    title: "Glass Etching Workshop with Jennifer Hetrick",
    details: "Sunday June 14 • 11:00 AM",
    price: "$80",
    url: null,
    soldOut: false,
  },
  {
    title: "Wine & Cheese Tasting with Jeffrey Combs",
    details: "Saturday June 13 • 4:00 PM • Windwatch",
    price: "$100",
    url: "https://treklongislandtickets.square.site/product/wine-and-cheese-tasting-with-jeffery-combs/NV5PDEEY4ARO2JMM3PZMSJ43?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Starfleet Fusion Flow with Stephanie Czajkowski",
    details: "Saturday June 13 • 12:00 PM • Windwatch",
    price: "$50",
    note: "Yoga/Pilates Fusion inspired by her Vulcan/Deltan heritage",
    url: "https://treklongislandtickets.square.site/product/starfleet-fusion-flow-with-stephanie-czajkowski-saturday-event/4T3IUEI2Y6SEGM7OTDZQQWGE?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "The Art of Resistance with Nana Visitor",
    details: "Sunday June 14 • 2:00 PM",
    price: "",
    url: null,
    soldOut: true,
  },
  {
    title: "Qigong Exercise Class with Musetta Vander",
    details: "Saturday June 13 • 9:00 AM",
    price: "$60",
    url: null,
    soldOut: false,
  },
  {
    title: "Qigong Exercise Class with Musetta Vander",
    details: "Sunday June 14 • 9:00 AM",
    price: "$60",
    url: null,
    soldOut: false,
  },
  {
    title: "Golden Key Qigong Healing Method with Musetta Vander",
    details: "Saturday June 13 • 1:00 PM",
    price: "$80",
    url: null,
    soldOut: false,
  },
  {
    title: "Stunt Action Workshop with Avaah Blackwell",
    details: "Saturday June 13 • 11:00 AM • Windwatch",
    price: "$25",
    url: "https://treklongislandtickets.square.site/product/hands-on-with-avaah-blackwell-stunt-action-workshop/RVSCCQU45E5EGAORQM6YNYSO?cs=true&cst=custom",
    soldOut: false,
  },
];

export default function InfoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.sectionHeader}>📍 Venue</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hyatt Regency Long Island</Text>
        <Text style={styles.cardText}>1717 Motor Pkwy, Hauppauge, NY</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              "https://maps.apple.com/?address=1717+Motor+Pkwy,+Hauppauge,+NY"
            )
          }
        >
          <Text style={styles.buttonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>🎟️ General Tickets</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Purchase tickets for general admission and special ticketed events.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("http://treklongislandtickets.square.site/")
          }
        >
          <Text style={styles.buttonText}>Purchase Tickets</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>🎭 Special Ticketed Events</Text>
      {TICKETED_EVENTS.map((event, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={[styles.cardTitle, { flex: 1 }]}>{event.title}</Text>
            {event.soldOut && <Text style={styles.soldOut}>SOLD OUT</Text>}
          </View>
          <Text style={styles.cardText}>{event.details}</Text>
          {event.note && <Text style={styles.cardNote}>{event.note}</Text>}
          {event.price ? <Text style={styles.price}>{event.price}</Text> : null}
          {event.url && !event.soldOut && (
            <TouchableOpacity
              style={styles.buttonOutline}
              onPress={() => Linking.openURL(event.url!)}
            >
              <Text style={styles.buttonOutlineText}>Get Tickets</Text>
            </TouchableOpacity>
          )}
          {!event.url && !event.soldOut && event.title.includes("door") && (
            <Text style={styles.cardNote}>Tickets at the door only</Text>
          )}
        </View>
      ))}

      <Text style={styles.sectionHeader}>🛍️ Official Swag</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Get your official Trek Long Island merchandise!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://www.etsy.com/shop/TrekLongIsland")
          }
        >
          <Text style={styles.buttonText}>Shop on Etsy</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>📱 Follow Us</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.socialRow}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/TrekLongIsland")
          }
        >
          <Text style={styles.socialText}>Facebook</Text>
          <Text style={styles.socialLink}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialRow}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/treklongisland/")
          }
        >
          <Text style={styles.socialText}>Instagram</Text>
          <Text style={styles.socialLink}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialRow}
          onPress={() =>
            Linking.openURL("https://mastodon.world/@TrekLongIsland")
          }
        >
          <Text style={styles.socialText}>Mastodon</Text>
          <Text style={styles.socialLink}>›</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>✉️ Contact</Text>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:treklongisland@gmail.com")}
        >
          <Text style={styles.emailLink}>treklongisland@gmail.com</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>🌐 Website</Text>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://treklongisland.com")}
        >
          <Text style={styles.emailLink}>treklongisland.com</Text>
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
  content: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 30,
  },
  sectionHeader: {
    color: "#f652a0",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#111111",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    gap: 8,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  cardText: {
    color: "#888888",
    fontSize: 14,
    lineHeight: 20,
  },
  cardNote: {
    color: "#009d9a",
    fontSize: 13,
    fontStyle: "italic",
  },
  price: {
    color: "#f3ba48",
    fontSize: 16,
    fontWeight: "bold",
  },
  soldOut: {
    color: "#ff4444",
    fontSize: 12,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#ff4444",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#f652a0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: "#f652a0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  buttonOutlineText: {
    color: "#f652a0",
    fontWeight: "bold",
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  socialText: {
    color: "#ffffff",
    fontSize: 15,
  },
  socialLink: {
    color: "#f652a0",
    fontSize: 18,
    fontWeight: "bold",
  },
  emailLink: {
    color: "#009d9a",
    fontSize: 15,
  },
});
