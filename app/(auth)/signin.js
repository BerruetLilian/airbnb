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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoLabel}>Sign in</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
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
            <Text style={styles.btnText}>Sign in</Text>
          )}
        </TouchableOpacity>
        <Link href="/signup" style={styles.linkText}>
          No account? Register
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

export default SignIn;
