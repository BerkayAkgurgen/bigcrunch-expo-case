import { Text, View } from "react-native";
import { RingIcon } from "../assets/icons";
import { headerStyles } from "./style/Header.style";
import AvatarCircle from "./Avatar";
import { Avatar } from "../assets/images";

const Header = () => {
  return (
    <View style={headerStyles.headerWrapper}>
      <AvatarCircle AvatarImage={Avatar} />
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
