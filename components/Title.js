import { Text, StyleSheet } from "react-native";
import colors from "../assets/colors.json";

const Title = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    fontWeight: "600",
    fontSize: 24,
  },
});

export default Title;
