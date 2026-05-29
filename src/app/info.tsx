import ScreenHeader from "@/components/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
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
    title: "Slut Trek Burlesque Show",
    details: "Saturday June 13 • 8:30 PM • Windwatch • Ages 21+ ID Required",
    price: "$15",
    url: "https://treklongislandtickets.square.site/product/slut-trek-risa-burlesque-show-with-lucy-blueskies-and-crew-21-and-over-id-will-be-checked-saturday-evening/VALRBYUQYE22ZXUK2AYQ7F4D?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Glass Etching Workshop with Nicole de Boer",
    details: "Saturday June 13 • 2:00 PM",
    price: "$80",
    url: "https://treklongislandtickets.square.site/product/glass-etching-art-with-nicole-de-boer-saturday-event/C723ICSC6FLEO2KX5NPB4KZE?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Glass Etching Workshop with Jennifer Hetrick",
    details: "Sunday June 14 • 11:00 AM",
    price: "$80",
    url: "https://treklongislandtickets.square.site/product/glass-etching-art-with-jennifer-hetrick-sunday-event/3RJKLF2552SGAXL7IAL6XF2N?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Wine & Cheese Tasting with Jeffrey Combs",
    details: "Saturday June 13 • 4:00 PM • Windwatch",
    price: "$100",
    url: "https://treklongislandtickets.square.site/product/wine-and-cheese-tasting-with-jeffery-combs/NV5PDEEY4ARO2JMM3PZMSJ43?cs=true&cst=custom",
    soldOut: true,
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
    url: "https://treklongislandtickets.square.site/",
    soldOut: true,
  },
  {
    title: "Qigong Exercise Class with Musetta Vander",
    details: "Saturday June 13 • 9:00 AM",
    price: "$60",
    url: "https://treklongislandtickets.square.site/product/qigong-exercise-class-with-musetta-vander-saturday-9-am/HMT4F4O2QPRDLUNUR2IVUT2N?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Qigong Exercise Class with Musetta Vander",
    details: "Sunday June 14 • 9:00 AM",
    price: "$60",
    url: "https://treklongislandtickets.square.site/product/qigong-exercise-class-with-musetta-vander-sunday-9-am/I7IWVBZHERR6AN3SG4A7SIDG?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Golden Key Qigong Healing Method with Musetta Vander",
    details: "Saturday June 13 • 1:00 PM",
    price: "$80",
    url: "https://treklongislandtickets.square.site/product/golden-key-qigong-healing-method-class-with-musetta-vander-saturday/LFZDMRLFFIAMLCQ24B6YZ5UZ?cs=true&cst=custom",
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

const PHOTO_OPS = [
  {
    title: "Nana Visitor",
    details: "Saturday 1:15 PM • Sunday 11:15 AM • Photo Studio",
    price: "$50",
    url: "https://treklongislandtickets.square.site/product/nana-visitor-photo-op/SEPZGOBIGZEFCVMEDQLRRNZQ?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Jeffrey Combs",
    details: "Saturday 1:30 PM • Sunday 11:30 AM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/jeffrey-combs-photo-op/FTC5FVHIKVUCMZINWOGNJAX6?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Nicole de Boer",
    details: "Saturday 1:45 PM • Sunday 11:45 AM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/nicole-de-boer-photo-op/YY42MN4FFGJSCPYWN3Q5FQXA?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Karim Diane",
    details: "Saturday 12:30 & 12:45 PM • Sunday 3:30 & 4:00 PM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/karim-diane-photo-op/BISJKQAFMGQ3PRWNVYBX65MV?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Celia Rose Gooding",
    details: "Saturday 3:45 PM • Sunday 12:45 PM • Photo Studio",
    price: "$50",
    url: "https://treklongislandtickets.square.site/product/celia-rose-gooding-photo-op/X2BLYDNAZEW7GNBSDYDIVAAD?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Dan Jeannotte",
    details: "Saturday 3:15 PM • Sunday 12:30 PM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/dan-jeannotte-photo-op/QRIVA2MPTJRZZHIDTMCBR2AI?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Chris Myers",
    details: "Saturday 3:30 PM • Sunday 12:15 PM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/chris-myers-photo-op/OY6ET4SO6AEPNETQADMG3GBL?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Jennifer Hetrick",
    details: "Saturday 12:15 PM • Sunday 1:30 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/jennifer-hetrick-photo-op/YUSLTMBUVNGEOT3CHPCSM6WBN?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Stephanie Czajkowski",
    details: "Saturday 11:30 AM • Sunday 2:45 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/stephanie-czajkowski-photo-op/FK6RRGBGFTB3WTJUMF3XU3GT?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Deirdre Imershein",
    details: "Saturday 12:00 PM • Sunday 1:15 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/deirdre-imershein-photo-op/U5VQVNLYHDKCGWRSKNRL24PE?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Bonnie Gordon",
    details: "Saturday 2:45 PM • Sunday 2:30 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/bonnie-gordon-photo-op/WHBAK2LNEAPRS6LNT3GTNOTT?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Avaah Blackwell",
    details: "Saturday 2:30 PM • Sunday 3:15 PM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/avaah-blackwell-photo-op/Y6ARMVUVHPO2VJSFRJLLETU3?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Musetta Vander",
    details: "Saturday 4:00 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/musetta-vander-photo-op/3ZZU5G4EBJYH26IEETD67E23?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Louise Sorel",
    details: "Saturday 4:15 PM • Sunday 1:45 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/louise-sorel-photo-op/RGXG4YT73FZDDU5YQ4NJA62S?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Carolyn McCormick",
    details: "Saturday 4:30 PM • Sunday 3:00 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/carolyn-mccormick-photo-op/4UTHEK4NHVDR3BHQSFMT5IUQ?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Sachi Parker",
    details: "Saturday 4:45 PM • Photo Studio",
    price: "$30",
    url: "https://treklongislandtickets.square.site/product/sachi-parker-photo-op/KRRJRBTBTIPLJ2DRTHZ7KOMS?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "DS9 Group Photo",
    details: "Saturday 1:00 PM • Sunday 11:00 AM • Photo Studio",
    price: "$90",
    url: "https://treklongislandtickets.square.site/product/ds9-group/MN45S4SMENHKNNBP7OWYQR6R?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "SNW Group Photo",
    details: "Saturday 3:00 PM • Sunday 12:00 PM • Photo Studio",
    price: "$60",
    url: "https://treklongislandtickets.square.site/product/snw-group/HASNLZMWKR5KVCBFZLH5H54A?cs=true&cst=custom",
    soldOut: false,
  },
  {
    title: "Risa Group Photo",
    details: "Saturday 11:45 AM • Sunday 1:00 PM • Photo Studio",
    price: "$40",
    url: "https://treklongislandtickets.square.site/product/risa-group/4PGDR23R4H5R77YXEZOJLQWR?cs=true&cst=custom",
    soldOut: false,
  },
];

export default function InfoScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScreenHeader />
      <View style={styles.content}>
        <Text style={styles.sectionHeader} accessibilityRole="header">
          🎭 Special Ticketed Events
        </Text>
        {TICKETED_EVENTS.map((event, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: theme.card }]}
          >
            <View style={styles.cardTitleRow}>
              <Text style={[styles.cardTitle, { color: theme.text, flex: 1 }]}>
                {event.title}
              </Text>
              {event.soldOut && (
                <Text style={styles.soldOut} accessibilityLabel="Sold out">
                  SOLD OUT
                </Text>
              )}
            </View>
            <Text style={[styles.cardText, { color: theme.subtext }]}>
              {event.details}
            </Text>
            {event.note && <Text style={styles.cardNote}>{event.note}</Text>}
            {event.price ? (
              <Text
                style={styles.price}
                accessibilityLabel={`Price: ${event.price}`}
              >
                {event.price}
              </Text>
            ) : null}
            {event.url && !event.soldOut && (
              <TouchableOpacity
                style={styles.buttonOutline}
                onPress={() => Linking.openURL(event.url!)}
                accessibilityLabel={`Get tickets for ${event.title}`}
                accessibilityRole="button"
                accessibilityHint="Opens the ticketing website"
              >
                <Text style={styles.buttonOutlineText}>Get Tickets</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        <Text style={styles.sectionHeader} accessibilityRole="header">
          📸 Photo Ops
        </Text>
        <Text style={[styles.photoOpsNote, { color: theme.subtext }]}>
          Show up a few minutes early! Check the Schedule tab for exact times.
        </Text>
        {PHOTO_OPS.map((op, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: theme.card }]}
          >
            <View style={styles.cardTitleRow}>
              <Text style={[styles.cardTitle, { color: theme.text, flex: 1 }]}>
                {op.title}
              </Text>
              {op.soldOut && (
                <Text style={styles.soldOut} accessibilityLabel="Sold out">
                  SOLD OUT
                </Text>
              )}
            </View>
            <Text style={[styles.cardText, { color: theme.subtext }]}>
              {op.details}
            </Text>
            <Text
              style={styles.price}
              accessibilityLabel={`Price: ${op.price}`}
            >
              {op.price}
            </Text>
            {op.url && !op.soldOut && (
              <TouchableOpacity
                style={styles.buttonOutline}
                onPress={() => Linking.openURL(op.url)}
                accessibilityLabel={`Get tickets for photo op with ${op.title}`}
                accessibilityRole="button"
                accessibilityHint="Opens the ticketing website"
              >
                <Text style={styles.buttonOutlineText}>Get Tickets</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        <Text style={styles.sectionHeader} accessibilityRole="header">
          📍 Venue
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            Hyatt Regency Long Island
          </Text>
          <Text style={[styles.cardText, { color: theme.subtext }]}>
            1717 Motor Pkwy, Hauppauge, NY
          </Text>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() =>
              Linking.openURL(
                "https://maps.apple.com/?address=1717+Motor+Pkwy,+Hauppauge,+NY"
              )
            }
            accessibilityLabel="Get directions to Hyatt Regency Long Island"
            accessibilityRole="button"
            accessibilityHint="Opens Maps app"
          >
            <Text style={styles.buttonOutlineText}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader} accessibilityRole="header">
          🎟️ General Tickets
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardText, { color: theme.subtext }]}>
            Purchase tickets for general admission and special ticketed events.
          </Text>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() =>
              Linking.openURL("http://treklongislandtickets.square.site/")
            }
            accessibilityLabel="Purchase general admission tickets for Trek Long Island"
            accessibilityRole="button"
            accessibilityHint="Opens the ticket purchasing website"
          >
            <Text style={styles.buttonOutlineText}>Purchase Tickets</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader} accessibilityRole="header">
          🛍️ Official Swag
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardText, { color: theme.subtext }]}>
            Get your official Trek Long Island merchandise!
          </Text>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() =>
              Linking.openURL("https://www.etsy.com/shop/TrekLongIsland")
            }
            accessibilityLabel="Shop Trek Long Island merchandise on Etsy"
            accessibilityRole="link"
            accessibilityHint="Opens Etsy shop"
          >
            <Text style={styles.buttonOutlineText}>Shop on Etsy</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader} accessibilityRole="header">
          📱 Follow Us
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <TouchableOpacity
            style={[styles.socialRow, { borderBottomColor: theme.divider }]}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/TrekLongIsland")
            }
            accessibilityLabel="Trek Long Island on Facebook"
            accessibilityRole="link"
            accessibilityHint="Opens Facebook page"
          >
            <Text style={[styles.socialText, { color: theme.text }]}>
              Facebook
            </Text>
            <Text style={styles.socialLink}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialRow, { borderBottomColor: theme.divider }]}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/treklongisland/")
            }
            accessibilityLabel="Trek Long Island on Instagram"
            accessibilityRole="link"
            accessibilityHint="Opens Instagram page"
          >
            <Text style={[styles.socialText, { color: theme.text }]}>
              Instagram
            </Text>
            <Text style={styles.socialLink}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialRow, { borderBottomColor: theme.divider }]}
            onPress={() =>
              Linking.openURL("https://mastodon.world/@TrekLongIsland")
            }
            accessibilityLabel="Trek Long Island on Mastodon"
            accessibilityRole="link"
            accessibilityHint="Opens Mastodon page"
          >
            <Text style={[styles.socialText, { color: theme.text }]}>
              Mastodon
            </Text>
            <Text style={styles.socialLink}>›</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader} accessibilityRole="header">
          ✉️ Contact
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:treklongisland@gmail.com")}
            accessibilityLabel="Email Trek Long Island at treklongisland@gmail.com"
            accessibilityRole="link"
          >
            <Text style={styles.emailLink}>treklongisland@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader} accessibilityRole="header">
          🌐 Website
        </Text>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://treklongisland.com")}
            accessibilityLabel="Trek Long Island official website"
            accessibilityRole="link"
            accessibilityHint="Opens treklongisland.com"
          >
            <Text style={styles.emailLink}>treklongisland.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 16, paddingBottom: 30 },
  sectionHeader: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "LeagueSpartan_700Bold",
    marginTop: 24,
    marginBottom: 12,
    backgroundColor: "#f652a0",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  photoOpsNote: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    marginBottom: 12,
    fontStyle: "italic",
  },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "LeagueSpartan_700Bold",
  },
  cardText: {
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
    lineHeight: 20,
  },
  cardNote: {
    color: "#009d9a",
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    fontStyle: "italic",
  },
  price: {
    color: "#f3ba48",
    fontSize: 16,
    fontFamily: "LeagueSpartan_700Bold",
  },
  soldOut: {
    color: "#ff4444",
    fontSize: 12,
    fontFamily: "LeagueSpartan_700Bold",
    borderWidth: 1,
    borderColor: "#ff4444",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
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
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  socialText: {
    fontSize: 15,
    fontFamily: "LeagueSpartan_700Bold",
  },
  socialLink: {
    color: "#f652a0",
    fontSize: 18,
    fontFamily: "LeagueSpartan_700Bold",
  },
  emailLink: {
    color: "#009d9a",
    fontSize: 15,
    fontFamily: "NotoSans_400Regular",
  },
});
