import { Stack } from "expo-router";
import { Logo } from "../../../components";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <Logo size={35} />,
        headerTitleAlign: "center",
        headerBackButtonDisplayMode: "minimal",
      }}
      initialRouteName="rooms"
    />
  );
};

export default HomeLayout;
