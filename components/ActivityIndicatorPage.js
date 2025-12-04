import { StyleSheet, View, ActivityIndicator } from "react-native";
import colors from "../assets/colors.json";

const ActivityIndicatorPage = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.pink} size={50} />
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

export default ActivityIndicatorPage;
