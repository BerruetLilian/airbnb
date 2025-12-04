import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors.json";
import Ionicons from "@expo/vector-icons/Ionicons";

const RoomRatings = ({ rating, reviews, id }) => {
  const stars = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      if (i > rating) {
        result.push(
          <Ionicons
            key={String(i) + "star" + id}
            name="star"
            size={20}
            color={colors.mediumGrey}
          />
        );
      } else {
        result.push(
          <Ionicons
            key={String(i) + "star" + id}
            name="star"
            size={20}
            color={colors.yelllowStar}
          />
        );
      }
    }
    return result;
  };
  return (
    <View style={styles.ratings}>
      <View style={styles.stars}>{stars()}</View>
      <Text style={styles.review}>{reviews + " reviews"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  stars: {
    flexDirection: "row",
    gap: 5,
  },
  review: {
    color: colors.mediumGrey,
  },
});

export default RoomRatings;
