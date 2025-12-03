import { View, StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors.json";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const PasswordInput = ({ placeholder, state, setState }) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={state}
        onChangeText={setState}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={!show}
      />
      <AntDesign
        style={styles.eye}
        name={show ? "eye" : "eye-invisible"}
        size={18}
        color={colors.grey}
        onPress={() => {
          setShow((prev) => !prev);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "80%",
  },
  eye: {
    position: "absolute",
    right: 5,
    top: 11,
    padding: 5,
  },
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "100%",
    fontSize: 16,
  },
});

export default PasswordInput;
