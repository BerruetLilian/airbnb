import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Logo } from "../../../components";
import Constants from "expo-constants";

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
