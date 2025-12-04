import { StyleSheet, View } from "react-native";
import colors from "../assets/colors.json";

const Divider = () => {
  return <View style={styles.divider} />;
};
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
});

export default Divider;
