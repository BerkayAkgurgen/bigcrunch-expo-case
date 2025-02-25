import { ScrollView, View, Text } from "react-native";
import { Header } from "../../components";
import { indexStyles } from "../../style/index.style";
import {
  BookCard,
  BuyPlan,
  MoodSlider,
  WritingsGrid,
} from "../../components/home";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={indexStyles.appBackground}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={indexStyles.wrapper}
      >
        <Header />
        <View style={indexStyles.titleContainer}>
          <Text style={indexStyles.title}>
            Good Afternoon
            <Text style={[indexStyles.title, indexStyles.span]}>,</Text>
          </Text>
          <Text style={[indexStyles.title, indexStyles.titleBold]}>
            Sarina!
          </Text>
        </View>
        <MoodSlider />
        <BookCard />
        <WritingsGrid />
        <BuyPlan />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
