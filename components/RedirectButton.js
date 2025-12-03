import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../assets/colors.json";
import { useRouter } from "expo-router";

const RedirectButton = ({ text, screen }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.replace(screen);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
  },
});

export default RedirectButton;
