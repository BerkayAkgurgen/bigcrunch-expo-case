import { StyleSheet, ScrollView, View, Text } from "react-native";

const Sessions = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Explore!</Text>
      </View>
    </ScrollView>
  );
};

export default Sessions;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: "Epilogue",
    fontWeight: "regular",
  },
});
