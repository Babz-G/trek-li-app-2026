import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    show: "DISCO/SNW/Starfleet Academy",
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
    name: "Tracy Martinson",
    role: "Electrical Engineer/Storyteller",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Tracy-Martinson-headshot.jpg",
  },
  {
    name: "Jake Black",
    role: "Writer/Producer/Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-26.png",
  },
];

const AUTHORS = [
  {
    name: "Derek Tyler Attico",
    role: "Author, Screenwriter",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-21.png",
  },
  {
    name: "Keith R.A. DeCandido",
    role: "Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-22.png",
  },
  {
    name: "Michael Jan Friedman",
    role: "Author",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/12.png",
  },
  {
    name: "Christopher D. Abbott",
    role: "Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-24.png",
  },
  {
    name: "Glenn Greenberg",
    role: "Author",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/8.png",
  },
  {
    name: "Robb Pearlman",
    role: "Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/05/Head-shots-42.png",
  },
  {
    name: "Glenn Hauman",
    role: "Author",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/2.png",
  },
  {
    name: "Aaron Rosenberg",
    role: "Author",
    photo: "https://treklongisland.com/wp-content/uploads/2025/03/5.png",
  },
  {
    name: "Jan Fennick",
    role: "Author",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-23.png",
  },
];

const ENTERTAINMENT = [
  {
    name: "Lucy BlueSkies",
    role: "Performance Artist / Drag Thing • Burlesque Show Sat.",
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
    role: "Performance Artist / Musician • NY Cosplay Cabaret Friday",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-34.png",
  },
  {
    name: "Lawrence Neals",
    role: "Performance Artist / Musician • NY Cosplay Cabaret Friday",
    photo:
      "https://treklongisland.com/wp-content/uploads/2026/03/Head-shots-33.png",
  },
];

function SectionHeader({ title }: { title: string }) {
  return <Text style={styles.sectionHeader}>{title}</Text>;
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
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => imdb && Linking.openURL(imdb)}
      disabled={!imdb}
    >
      {photo ? (
        <Image source={{ uri: photo }} style={styles.photo} />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
      )}
      <View style={styles.cardDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {imdb ? <Text style={styles.imdbLink}>IMDb ›</Text> : null}
    </TouchableOpacity>
  );
}

export default function GuestsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
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

      <SectionHeader title="🎨 Artists & Industry" />
      {ARTISTS.map((g) => (
        <GuestCard
          key={g.name}
          name={g.name}
          subtitle={g.role}
          photo={g.photo}
        />
      ))}

      <SectionHeader title="📚 Authors" />
      {AUTHORS.map((g) => (
        <GuestCard
          key={g.name}
          name={g.name}
          subtitle={g.role}
          photo={g.photo}
        />
      ))}

      <SectionHeader title="🎭 Entertainment" />
      {ENTERTAINMENT.map((g) => (
        <GuestCard
          key={g.name}
          name={g.name}
          subtitle={g.role}
          photo={g.photo}
        />
      ))}
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
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    gap: 12,
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
    fontWeight: "bold",
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
  },
  subtitle: {
    color: "#888888",
    fontSize: 13,
  },
  imdbLink: {
    color: "#f3ba48",
    fontSize: 12,
    fontWeight: "bold",
  },
});
