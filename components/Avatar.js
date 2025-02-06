import { Image } from "react-native";
import { headerStyles } from "./style/Header.style";

const AvatarCircle = ({ AvatarImage }) => {
  return <Image style={headerStyles.headerAvatar} source={AvatarImage} />;
};

export default AvatarCircle;
