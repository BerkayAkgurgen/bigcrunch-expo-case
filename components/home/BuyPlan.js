import { Text, View } from "react-native";
import { MeditationIcon, RightArrowIcon } from "../../assets/icons";
import Card from "../Card";
import { buyPlanStyles } from "./styles/BuyPlan.style";

const BuyPlan = () => {
  return (
    <Card color={"#55A06F"} icon={false} style={buyPlanStyles.extraSpace}>
      <View style={buyPlanStyles.rowCard}>
        <View style={buyPlanStyles.flex}>
          <Text style={buyPlanStyles.sessionsTitle}>Plan Expired</Text>
          <Text style={buyPlanStyles.sessionsDesc}>
            Get back chat access and session credits
          </Text>
          <View style={buyPlanStyles.rowCard}>
            <Text style={buyPlanStyles.sessionsBook}>Buy more</Text>
            <RightArrowIcon />
          </View>
        </View>
        <MeditationIcon />
      </View>
    </Card>
  );
};

export default BuyPlan;
