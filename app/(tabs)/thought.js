import { StyleSheet, ScrollView, View, Text } from "react-native";

const Thought = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Thought!</Text>
      </View>
    </ScrollView>
  );
};

export default Thought;

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
