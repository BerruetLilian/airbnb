import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

const Room = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Room</Text>
      <Button
        title="GO TO ROOMS"
        onPress={() => {
          router.push("/home//rooms");
        }}
      />
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

export default Room;
