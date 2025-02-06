import { Text, View } from "react-native";
import Card from "../Card";
import { upcomingCardStyles } from "./style/upcomingCard.style";
import { PlayIcon } from "../../assets/icons";

const UpcomingCard = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <View style={upcomingCardStyles.rowCard}>
        <View style={upcomingCardStyles.flex}>
          <Text style={upcomingCardStyles.upcomingTitle}>Upcoming Session</Text>
          <Text style={upcomingCardStyles.upcomingDesc}>
            Sahana V, Msc in Clinical Psychology
          </Text>
          <Text style={upcomingCardStyles.upcomingDate}>7:30 PM - 8:30 PM</Text>
          <View
            style={[upcomingCardStyles.rowCard, upcomingCardStyles.centerIcon]}
          >
            <Text style={upcomingCardStyles.upcomingBook}>Join Now</Text>
            <PlayIcon />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default UpcomingCard;
