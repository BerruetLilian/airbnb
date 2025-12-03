import { Text, StyleSheet } from "react-native";
import colors from "../assets/colors.json";

const ErrorMessage = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.pink,
  },
});

export default ErrorMessage;
