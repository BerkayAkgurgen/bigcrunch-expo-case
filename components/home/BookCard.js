import { Text, View } from "react-native";
import Card from "../Card";
import { DateIcon, MeetupIcon } from "../../assets/icons";
import { bookCardStyles } from "./styles/BookCard.style";

const BookCard = () => {
  return (
    <Card>
      <View style={bookCardStyles.rowCard}>
        <View style={bookCardStyles.flex}>
          <Text style={bookCardStyles.sessionsTitle}>1 on 1 Sessions</Text>
          <Text style={bookCardStyles.sessionsDesc}>
            Let’s open up to the things that matter the most{" "}
          </Text>
          <View style={bookCardStyles.rowCard}>
            <Text style={bookCardStyles.sessionsBook}>Book Now</Text>
            <DateIcon />
          </View>
        </View>
        <MeetupIcon />
      </View>
    </Card>
  );
};

export default BookCard;
