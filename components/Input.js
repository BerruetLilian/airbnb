import { TextInput, StyleSheet } from "react-native";
import colors from "../assets/colors.json";

const Input = ({ placeholder, state, setState }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={state}
      onChangeText={setState}
      placeholder={placeholder}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});

export default Input;
