import ScreenHeader from "@/components/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CELEBRITY_GUESTS = [
  {
    name: "Nana Visitor",
    show: "Deep Space 9",
    imdb: "https://www.imdb.com/name/nm0000684/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/06/Head-shots.png",
  },
  {
    name: "Jeffrey Combs",
    show: "Most Trek Series 😉",
    imdb: "https://www.imdb.com/name/nm0001062/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-5.png",
  },
  {
    name: "Celia Rose Gooding",
    show: "Strange New Worlds",
    imdb: "https://www.imdb.com/name/nm10957503/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2024/10/Untitled-236-x-300-px-1.png",
  },
  {
    name: "Karim Diané",
    show: "Starfleet Academy",
    imdb: "https://www.imdb.com/name/nm10957503/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-35.png",
  },
  {
    name: "Nicole de Boer",
    show: "Deep Space Nine",
    imdb: "https://www.imdb.com/name/nm0001062/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-6.png",
  },
  {
    name: "Dan Jeannotte",
    show: "Strange New Worlds",
    imdb: "https://www.imdb.com/name/nm3005219/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/11/Head-shots-1.png",
  },
  {
    name: "Chris Myers",
    show: "Strange New Worlds",
    imdb: "https://memory-alpha.fandom.com/wiki/Chris_Myers",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/11/Head-shots-2.png",
  },
  {
    name: "Jennifer Hetrick",
    show: "TNG/DS9",
    imdb: "https://www.imdb.com/name/nm0381763/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/09/Head-shots-2.png",
  },
  {
    name: "Stephanie Czajkowski",
    show: "Picard",
    imdb: "https://www.imdb.com/name/nm1570123/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/11/Head-shots-4.png",
  },
  {
    name: "Bonnie Gordon",
    show: "Prodigy",
    imdb: "https://www.imdb.com/name/nm3239252/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-19.png",
  },
  {
    name: "Louise Sorel",
    show: "TOS",
    imdb: "https://www.imdb.com/find/?q=louise+sorel",
    photo:
      "https://treklongisland.com/wp-content/uploads/2024/12/Untitled-236-x-300-px-9.png",
  },
  {
    name: "Carolyn McCormick",
    show: "TNG",
    imdb: "https://www.imdb.com/name/nm0566509/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/11/Head-shots-3.png",
  },
  {
    name: "Avaah Blackwell",
    show: "DISCO/SNW/Starfleet Academy Actor/Stunts",
    imdb: "https://treklongisland.com/avaah-blackwell/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-17.png",
  },
  {
    name: "Sachi Parker",
    show: "TNG",
    imdb: "https://www.imdb.com/name/nm0662599/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-7.png",
  },
  {
    name: "Musetta Vander",
    show: "Voyager",
    imdb: "https://www.imdb.com/name/nm0888727/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/08/Head-shots-1.png",
  },
  {
    name: "Deirdre Imershein",
    show: "TNG/DS9",
    imdb: "https://www.imdb.com/name/nm0408170/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/10/Head-shots.png",
  },
  {
    name: "Jesse James Keitel",
    show: "Strange New Worlds • Diversity Guest",
    imdb: "https://www.imdb.com/name/nm5740850/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-8.png",
  },
  {
    name: "Tracee Cocco",
    show: "TNG/DS9/Voyager • Diversity Cohost",
    imdb: "https://www.imdb.com/name/nm1006740/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-9.png",
  },
  {
    name: "Jackie Cox",
    show: "Starfleet Academy • Diversity Guest • Sunday Only!",
    imdb: "https://www.imdb.com/name/nm3269931/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-27.png",
  },
];

const ARTISTS = [
  {
    name: "Lolita Fatjo",
    role: "Producer/Script Coordinator TNG, DS9, VOY",
    imdb: "https://www.imdb.com/name/nm0268877/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-45.png",
  },
  {
    name: "David Zappone",
    role: "President and Founder 455 Films Producer/Director",
    imdb: "https://treklongisland.com/david-zappone/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-46.png",
  },
  {
    name: "Tracy Martinson",
    role: "Electrical Engineer/Storyteller",
    imdb: "https://treklongisland.com/tracy-martinson/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-47.png",
  },
  {
    name: "Jake Black",
    role: "Writer/Producer/Author",
    imdb: "https://treklongisland.com/jake-black/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-26.png",
  },
];

const AUTHORS = [
  {
    name: "Derek Tyler Attico",
    role: "Author, Screenwriter",
    imdb: "https://www.derekattico.com/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-21.png",
  },
  {
    name: "Keith R.A. DeCandido",
    role: "Author (a lot)",
    imdb: "http://decandido.net/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-22.png",
  },
  {
    name: "Michael Jan Friedman",
    role: "Author",
    imdb: "https://memory-alpha.fandom.com/wiki/Michael_Jan_Friedman",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/12.png",
  },
  {
    name: "Christopher D. Abbott",
    role: "Author",
    imdb: "https://cdanabbott.wordpress.com/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-24.png",
  },
  {
    name: "Glenn Greenberg",
    role: "Author",
    imdb: "https://memory-alpha.fandom.com/wiki/Glenn_Greenberg",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/8.png",
  },
  {
    name: "Robb Pearlman",
    role: "Author",
    imdb: "https://www.robbpearlman.com/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-42.png",
  },
  {
    name: "Jake Black",
    role: "Author",
    imdb: "https://treklongisland.com/jake-black/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-26.png",
  },
  {
    name: "Glenn Hauman",
    role: "Author",
    imdb: "https://memory-alpha.fandom.com/wiki/Glenn_Hauman",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/2.png",
  },
  {
    name: "Aaron Rosenberg",
    role: "Author",
    imdb: "https://memory-alpha.fandom.com/wiki/Aaron_Rosenberg",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/5.png",
  },
  {
    name: "Jan Fennick",
    role: "Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-23.png",
  },
];

const IDIC_TRACK = [
  {
    name: "Jesse James Keitel",
    role: "Strange New Worlds/Queer as Folk",
    imdb: "https://www.imdb.com/name/nm5740850/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-8.png",
  },
  {
    name: "Tracee Cocco",
    role: "TNG/DS9/Voyager • Cohost",
    imdb: "https://www.imdb.com/name/nm1006740/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-9.png",
  },
  {
    name: "Jackie Cox",
    role: "Starfleet Academy/RuPaul's Drag Race • Sunday Only",
    imdb: "https://www.imdb.com/name/nm3269931/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-27.png",
  },
  {
    name: "Paul Adams",
    role: "Diversity & Inclusion Manager, Producer • Urban Adventure Companies/Buddies Spa DEI",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-11.png",
  },
  {
    name: "Heather Wood",
    role: "Drag Professional • Diversity Advocate • To Proudly Go CEO",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-13.png",
  },
  {
    name: "Logan Stone, D'manda Martini, Jessica Crouse",
    role: "2 Drag Queens, a Lesbian, and a Baby Podcast Hosts",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-12.png",
  },
  {
    name: "Matthew Jennings",
    role: "1701 A Blerd Story • Actor, Producer, Writer, & Diversity Advocate",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-25.png",
  },
  {
    name: "Beau Daciuos",
    role: "Disability Advocate • Drag King Professional",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-14.png",
  },
  {
    name: "Conor Heights",
    role: "Artist & Activist",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-15.png",
  },
  {
    name: "Adeena Mignogna",
    role: "Author, Producer, Advocate • BIG Sci-Podcast Co-Host",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/01/Head-shots-16.png",
  },
  {
    name: "César Manzano",
    role: "Diversity Champion • Camino Academy LLC Founder",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-43.png",
  },
  {
    name: "Damian Effler",
    role: "Diversity Champion • Hailing Frequencies Open Co-Host",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-36.png",
  },
  {
    name: "Aiyana-Mei Tom",
    role: "Diversity Champion • Molecular Biologist",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-37.png",
  },
  {
    name: "Janera Tiell Manno",
    role: "Diversity Advocate • Star Trek Family",
    photo:
      "https://treklongisland.com/wp-content/uploads/2025/02/Untitled-236-x-300-px-18.png",
  },
  {
    name: "Kris Otto",
    role: "Buddies Spa CEO, Producer, & Artist",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-44.png",
  },
  {
    name: "Leigh Ellen Mitchell",
    role: "Diversity Champion • Parody Singer & Go Phlox Yourself Host",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-38.png",
  },
  {
    name: "Chad Briggs",
    role: "Diversity Advocate • Child and Adolescent Therapist",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-39.png",
  },
  {
    name: "Dr. Brenda Dorsh",
    role: "Pop Hero Coalition • Resiliency & Self Compassion Speaker",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-41.png",
  },
];

const ENTERTAINMENT = [
  {
    name: "Lucy BlueSkies",
    role: "Performance Artist / Drag Thing • Burlesque Show Sat. Evening",
    imdb: "https://treklongisland.com/5427-2/",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-18.png",
  },
  {
    name: "Alex Simmons",
    role: "Comedian • Warped Comedy Saturday Night",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-28.png",
  },
  {
    name: "Dani Riedel",
    role: "Comedian • Warped Comedy Saturday Night",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-29.png",
  },
  {
    name: "David McOwen",
    role: "Comedian • Warped Comedy Saturday Night",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-30.png",
  },
  {
    name: "Justin Avery Smith",
    role: "Comedian • Warped Comedy Saturday Night",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-32.png",
  },
  {
    name: "Cat Smith",
    role: "Performance Artist / Musician • NY Cosplay Cabaret Friday Evening",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-34.png",
  },
  {
    name: "Lawrence Neals",
    role: "Performance Artist / Musician • NY Cosplay Cabaret Friday Evening",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-33.png",
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <Text style={styles.sectionHeader} accessibilityRole="header">
      {title}
    </Text>
  );
}

function GuestCard({
  name,
  subtitle,
  imdb,
  photo,
}: {
  name: string;
  subtitle: string;
  imdb?: string;
  photo?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => imdb && Linking.openURL(imdb)}
      disabled={!imdb}
      accessibilityLabel={`${name}, ${subtitle}`}
      accessibilityRole={imdb ? "link" : "text"}
      accessibilityHint={imdb ? "Opens IMDb profile" : undefined}
      {...{
        onHoverIn: () => setHovered(true),
        onHoverOut: () => setHovered(false),
      }}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.card },
        pressed && { transform: [{ scale: 0.97 }], borderColor: "#ff8cc8" },
        !pressed &&
          hovered &&
          ({
            transform: [{ translateY: -6 }],
            boxShadow: "0 0 20px rgba(246, 82, 160, 0.6)",
            borderColor: "#ff8cc8",
          } as any),
      ]}
    >
      {photo ? (
        <Image
          source={{ uri: photo }}
          style={styles.photo}
          accessibilityLabel={`Photo of ${name}`}
          accessibilityRole="image"
        />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
      )}
      <View style={styles.cardDetails}>
        <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          {subtitle}
        </Text>
      </View>
      {imdb ? <Text style={styles.imdbLink}>IMDb ›</Text> : null}
    </Pressable>
  );
}

export default function GuestsScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScreenHeader />
      <View style={styles.content}>
        <SectionHeader title="⭐ Celebrity Guests" />
        {CELEBRITY_GUESTS.map((g) => (
          <GuestCard
            key={g.name}
            name={g.name}
            subtitle={g.show}
            imdb={g.imdb}
            photo={g.photo}
          />
        ))}
        <SectionHeader title="🎨 Artists & Industry Professionals" />
        {ARTISTS.map((g) => (
          <GuestCard
            key={g.name}
            name={g.name}
            subtitle={g.role}
            imdb={g.imdb}
            photo={g.photo}
          />
        ))}
        <SectionHeader title="📚 Authors" />
        {AUTHORS.map((g) => (
          <GuestCard
            key={g.name}
            name={g.name}
            subtitle={g.role}
            imdb={g.imdb}
            photo={g.photo}
          />
        ))}
        <SectionHeader title="🌈 IDIC Track Guests and Panelists" />
        {IDIC_TRACK.map((g) => (
          <GuestCard
            key={g.name}
            name={g.name}
            subtitle={g.role}
            imdb={g.imdb}
            photo={g.photo}
          />
        ))}
        <SectionHeader title="🎭 Entertainment Artists" />
        {ENTERTAINMENT.map((g) => (
          <GuestCard
            key={g.name}
            name={g.name}
            subtitle={g.role}
            imdb={g.imdb}
            photo={g.photo}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  sectionHeader: {
    color: "#f652a0",
    fontSize: 18,
    fontFamily: "LeagueSpartan_700Bold",
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#f652a0",
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f652a0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "LeagueSpartan_700Bold",
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontFamily: "LeagueSpartan_700Bold",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
  },
  imdbLink: {
    color: "#f3ba48",
    fontSize: 12,
    fontFamily: "LeagueSpartan_700Bold",
  },
});
