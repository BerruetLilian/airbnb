import { StyleSheet, Text } from "react-native";

const RoomTitle = ({ text }) => {
  return (
    <Text style={styles.title} numberOfLines={1}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    flexShrink: 1,
  },
});

export default RoomTitle;
