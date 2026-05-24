import { StyleSheet, Text, View } from "react-native";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Schedule</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  text: {
    color: "#f652a0",
    fontSize: 24,
  },
});
