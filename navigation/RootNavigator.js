import { Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";

const RootNavigation = () => {
  const { userToken } = useAuth();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!userToken}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={userToken}>
        <Stack.Screen name="(main)" />
      </Stack.Protected>
    </Stack>
  );
};

export default RootNavigation;
