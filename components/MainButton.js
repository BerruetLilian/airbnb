import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../assets/colors.json";

const MainButton = ({ text, func, loading }) => {
  return (
    <Pressable style={styles.button} onPress={func} disabled={loading}>
      {loading ? (
        <ActivityIndicator color={"#F8575C"} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default MainButton;
