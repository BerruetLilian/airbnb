import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import logo from "../../assets/img/airbnb_logo.webp";
import axios from "axios";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password || !username || !desc || !confPassword) {
      setErrorMessage("Please fill all fields");
    } else if (password !== confPassword) {
      setErrorMessage("Please confirm your password");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
          {
            email: email,
            username: username,
            description: desc,
            password: password,
          }
        );
        console.log("response=>", response.data);
        alert("Compte créé");
        setLoading(false);
      } catch (error) {
        if (error.name === "AxiosError") {
          console.log(error.response.data);

          setErrorMessage(error.response.data.error);
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
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoLabel}>Sign up</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            multiline
            placeholder="Describe yourself in a few words..."
            value={desc}
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={(text) => setDesc(text)}
          />
        </View>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <AntDesign
            style={styles.eye}
            name={showPassword ? "eye" : "eye-invisible"}
            size={18}
            color="#868686"
            onPress={() => {
              setShowPassword((prev) => !prev);
            }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          value={confPassword}
          onChangeText={(text) => setConfPassword(text)}
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={"#F8575C"} />
          ) : (
            <Text style={styles.btnText}>Sign up</Text>
          )}
        </TouchableOpacity>
        <Link href="/signin" style={styles.linkText}>
          Already have an account? Sign in
        </Link>
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
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoContainer: {
    alignItems: "center",
    gap: 20,
  },
  logo: {
    height: 120,
    width: 130,
  },
  logoLabel: {
    fontSize: 24,
    color: "#696969",
  },
  inputContainer: {
    paddingHorizontal: 50,
    width: "100%",
    gap: 30,
  },
  input: {
    borderBottomColor: "#FFCED2",
    borderBottomWidth: 2,
    height: 40,
  },
  textArea: {
    borderColor: "#FFCED2",
    borderWidth: 2,
    height: 100,
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  errorMessage: {
    color: "#FA868A",
  },
  btn: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#F8575C",
    borderWidth: 2,
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 18,
    color: "#676767",
  },
  linkText: {
    color: "#868686",
  },
  eye: {
    position: "absolute",
    right: 5,
    top: 11,
  },
});

export default SignUp;
