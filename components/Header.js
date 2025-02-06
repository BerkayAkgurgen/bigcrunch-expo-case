import { Image, Text, View } from "react-native";
import Avatar from "../assets/images/avatar.png";
import { RingIcon } from "../assets/icons";
import { headerStyles } from "./style/Header.style";

const Header = () => {
  return (
    <View style={headerStyles.headerWrapper}>
      <Image style={headerStyles.headerAvatar} source={Avatar} />
      <View style={{ position: "relative" }}>
        <RingIcon />
        <View style={headerStyles.ringWrapper}>
          <Text style={headerStyles.ringCount}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
