import { View, Image, StyleSheet } from "react-native";

import logo from "../assets/img/airbnb_logo.webp";

const Logo = ({ size = 120 }) => {
  return (
    <View>
      <Image
        source={logo}
        style={{ height: size, aspectRatio: 1 / 1 }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 120,
    aspectRatio: 1 / 1,
  },
});

export default Logo;
