import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  const [userToken, setUserToken] = useState("");

  const login = async (id, token) => {
    setUserID(id);
    setUserToken(token);
    await AsyncStorage.setItem("userID", id);
    await AsyncStorage.setItem("userToken", token);
  };

  const logout = async () => {
    setUserToken("");
    setUserID("");
    await AsyncStorage.removeItem("userID");
    await AsyncStorage.removeItem("userToken");
  };

  useEffect(() => {
    const getAsyncData = async () => {
      try {
        const userID = await AsyncStorage.getItem("userID");
        const userToken = await AsyncStorage.getItem("userToken");
        console.log(userID, userToken);

        if (userID && userToken) {
          setUserID(userID);
          setUserToken(userToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAsyncData();
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, userID, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
