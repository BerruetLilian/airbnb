import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
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
} from "../../components/";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all fields");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          {
            email: email,
            password: password,
          }
        );
        console.log("response=>", response.data);
        alert("Connecté");
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
          console.log(error.message);
          setErrorMessage(error.message);
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
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {},
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
