import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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

  const signup = async (body, callBackSuccess, callBackError) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        body
      );
      console.log("signup response => ", response.data);
      setUserID(response.data.id);
      setUserToken(response.data.token);
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

  return (
    <AuthContext.Provider value={{ userToken, userID, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
