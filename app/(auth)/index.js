import { StyleSheet, View, StatusBar } from "react-native";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import {
  Logo,
  Title,
  Input,
  PasswordInput,
  MainButton,
  RedirectButton,
  ErrorMessage,
} from "../../components";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all fields");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          { email: email, password: password }
        );
        console.log("login response => ", response.data);
        login(response.data.id, response.data.token);
        await AsyncStorage.setItem("userID", response.data.id);
        await AsyncStorage.setItem("userToken", response.data.token);
        setLoading(false);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
          if (error.response.data.error === "Unauthorized") {
            setErrorMessage("Mot de passe invalide");
          } else {
            setErrorMessage(error.response.data.error);
          }
        } else {
          setErrorMessage(error.message);
          console.log(error.message);
        }
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.logoContainer}>
        <Logo />
        <Title text={"Sign in"} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="email" state={email} setState={setEmail} />
        <PasswordInput
          placeholder="password"
          state={password}
          setState={setPassword}
        />
      </View>
      <View style={styles.registerContainer}>
        <ErrorMessage text={errorMessage} />
        <MainButton text={"Sign in"} func={handleSubmit} loading={loading} />
        <RedirectButton text={"No account? Register"} screen={"/signup"} />
      </View>
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  contentContainer: {
    justifyContent: "space-around",
    flexGrow: 1,
    paddingBottom: 42,
  },
  logoContainer: {
    alignItems: "center",
    gap: 20,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    gap: 30,
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
});

export default SignIn;
