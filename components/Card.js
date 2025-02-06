import { View } from "react-native";
import { Wave } from "../assets/icons";
import { cardStyles } from "./style/Card.style";

const Card = ({ children, color = "#FEF3E7", icon = true, style }) => {
  return (
    <View style={[cardStyles.cardWrapper(color), style]}>
      {icon && (
        <View style={cardStyles.wave}>
          <Wave />
        </View>
      )}
      {children}
    </View>
  );
};

export default Card;
