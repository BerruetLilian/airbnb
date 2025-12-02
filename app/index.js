import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <StatusBar style="auto" />
      <Button
        title="GO TO SIGN IN"
        onPress={() => {
          router.push("/signin");
        }}
      />
      <Button
        title="GO TO SIGN UP"
        onPress={() => {
          router.push("/signup");
        }}
      />
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

export default HomePage;
