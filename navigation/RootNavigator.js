import { Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";

const RootNavigator = () => {
  const { userToken, userID } = useAuth();
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
