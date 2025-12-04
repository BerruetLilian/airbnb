import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  const [userToken, setUserToken] = useState("");

  const login = async (id, token) => {
    setUserID(id);
    setUserToken(token);
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
