import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import {
  ErrorMessage,
  Input,
  Logo,
  MainButton,
  PasswordInput,
  RedirectButton,
  TextArea,
  Title,
} from "../../components";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password || !username || !desc || !confPassword) {
      setErrorMessage("Please fill all fields");
    } else if (password !== confPassword) {
      setErrorMessage("Please confirm your password");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
          {
            email: email,
            username: username,
            description: desc,
            password: password,
          }
        );
        console.log("signup response => ", response.data);
        login(response.data.id, response.data.token);
        setLoading(false);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);
          setErrorMessage(error.response.data.error);
        } else {
          console.log(error.message);
          setErrorMessage(error.message);
        }
        callBackError(error);
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
        <Title text={"Sign up"} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="email" state={email} setState={setEmail} />
        <Input placeholder="username" state={username} setState={setUsername} />
        <TextArea
          placeholder="Describe yourself in a few words..."
          state={desc}
          setState={setDesc}
        />
        <PasswordInput
          placeholder={"password"}
          state={password}
          setState={setPassword}
        />
        <PasswordInput
          placeholder={"confirm password"}
          state={confPassword}
          setState={setConfPassword}
        />
      </View>
      <View style={styles.registerContainer}>
        <ErrorMessage text={errorMessage} />
        <MainButton text={"Sign up"} func={handleSubmit} loading={loading} />
        <RedirectButton
          text={"Already have an account? Sign in"}
          screen={"/"}
        />
      </View>
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
    gap: 10,
    width: "100%",
  },
});

export default SignUp;
