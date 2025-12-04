import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { ActivityIndicatorPage, RoomItem, Divider } from "../../../components";
import axios from "axios";
import { useRouter } from "expo-router";

const Rooms = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        setData(response.data);
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
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatList}
            data={data}
            keyExtractor={(item) => String(item._id)}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: "/home/room",
                      params: { id: item._id },
                    });
                  }}
                >
                  <RoomItem
                    room={item}
                    func={() => {
                      console.log("click");
                    }}
                  />
                </Pressable>
              );
            }}
            ItemSeparatorComponent={() => <Divider />}
          />
          <StatusBar style="auto" />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatList: {
    padding: 20,
    gap: 20,
  },
});

export default Rooms;
