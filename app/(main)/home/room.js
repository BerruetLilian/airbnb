import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicatorPage,
  RoomImageBackground,
  RoomAvatar,
  RoomRatings,
  RoomTitle,
} from "../../../components";
import axios from "axios";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../../assets/colors.json";

const Room = () => {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState(null);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/" + id
        );
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <ActivityIndicatorPage />
      ) : (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <RoomImageBackground
            picture={room.photos[0].url}
            price={room.price}
            size={300}
          />
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <RoomTitle text={room.title} />
              <RoomRatings rating={room.ratingValue} reviews={room.reviews} />
            </View>
            <RoomAvatar picture={room.user.account.photo.url} />
          </View>
          <Text numberOfLines={showDesc ? 0 : 3}>{room.description}</Text>
          <Pressable
            onPress={() => {
              setShowDesc((prev) => !prev);
            }}
          >
            <View style={styles.showDesc}>
              <Text style={styles.showText}>
                {showDesc ? "Show less" : "Show more"}
              </Text>
              <Entypo
                name={showDesc ? "triangle-up" : "triangle-down"}
                size={20}
                color={colors.grey}
              />
            </View>
          </Pressable>
          <StatusBar style="auto" />
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  contentContainer: {
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
  showDesc: {
    flexDirection: "row",
    alignItems: "center",
  },
  showText: {
    color: colors.grey,
  },
});

export default Room;
