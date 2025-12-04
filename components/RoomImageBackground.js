import { StyleSheet, Text, ImageBackground } from "react-native";

const RoomImageBackground = ({ picture, price, size = 200 }) => {
  return (
    <ImageBackground
      source={{ uri: picture }}
      style={[styles.picture, { height: size }]}
      resizeMethod="cover"
    >
      <Text style={styles.price}>{price + " €"}</Text>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  picture: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  price: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    minWidth: 60,
    marginBottom: 20,
    fontSize: 18,
  },
});

export default RoomImageBackground;
