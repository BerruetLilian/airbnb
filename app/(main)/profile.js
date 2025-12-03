import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="LOGOUT" onPress={logout} />
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

export default Profile;
