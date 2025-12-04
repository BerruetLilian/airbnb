import { StyleSheet, Image } from "react-native";

const RoomAvatar = ({ picture }) => {
  return <Image style={styles.avatar} source={{ uri: picture }} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: 50,
    height: 70,
    aspectRatio: 1 / 1,
  },
});

export default RoomAvatar;
