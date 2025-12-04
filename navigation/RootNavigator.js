import { Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootNavigator = () => {
  const { userToken, userID, login } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const userID = await AsyncStorage.getItem("userID");
      const userToken = await AsyncStorage.getItem("userToken");
      console.log(userID, userToken);

      if (userID && userToken) {
        login(userID, userToken);
      }
    };
    fetchData();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!userToken && !userID}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={userToken && userID}>
        <Stack.Screen name="(main)" />
      </Stack.Protected>
    </Stack>
  );
};

export default RootNavigator;
