import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

// le provider
export const AuthContextProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [userID, setUserID] = useState("");
  const [userToken, setUserToken] = useState("");

  const login = async (body, callBackSuccess, callBackError) => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        body
      );
      setUserID(response.data.id);
      setUserToken(response.data.token);
      console.log("login response => ", response.data);
      callBackSuccess(response.data);
    } catch (error) {
      if (error.name === "AxiosError") {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      callBackError(error);
    }
  };

  const logout = () => {
    setUserToken("");
    setUserID("");
  };

  return (
    <AuthContext.Provider value={{ userToken, userID, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
