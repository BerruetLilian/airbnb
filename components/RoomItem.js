import { StyleSheet, Text, View, Image } from "react-native";
import RoomImageBackground from "./RoomImageBackground";
import RoomTitle from "./RoomTitle";
import RoomRatings from "./RoomRatings";
import RoomAvatar from "./RoomAvatar";

const RoomItem = ({ room }) => {
  return (
    <View style={styles.container}>
      <RoomImageBackground picture={room.photos[0].url} price={room.price} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <RoomTitle text={room.title} />
          <RoomRatings rating={room.ratingValue} reviews={room.reviews} />
        </View>
        <RoomAvatar picture={room.user.account.photo.url} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 10,
    gap: 10,
  },
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "80%",
    gap: 20,
  },
});

export default RoomItem;
