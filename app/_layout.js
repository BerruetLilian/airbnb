import { AuthContextProvider } from "../context/AuthContext";
import RootNavigation from "../navigation/RootNavigator";

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  );
};

export default RootLayout;
