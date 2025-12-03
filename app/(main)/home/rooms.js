import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Rooms = () => {
  return (
    <View style={styles.container}>
      <Text>Rooms</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Rooms;
