import { StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors.json";

const TextArea = ({ placeholder, setState, state }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={state}
      onChangeText={setState}
      multiline={true}
      numberOfLines={10}
      maxLength={250}
      textAlignVertical="top"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.lightPink,
    borderWidth: 2,
    width: "80%",
    marginBottom: 30,
    marginTop: 15,
    fontSize: 16,
    height: 100,
    padding: 10,
  },
});

export default TextArea;
