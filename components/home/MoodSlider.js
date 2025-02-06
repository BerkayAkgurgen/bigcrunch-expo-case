import { Dimensions, FlatList, Text, View } from "react-native";
import {
  AngryIcon,
  CalmIcon,
  HappyFaceIcon,
  ManicIcon,
} from "../../assets/icons";
import { moodSliderStyles } from "./styles/MoodSlider.style";

const MoodSlider = () => {
  const screenWidth = Dimensions.get("window").width;

  const FlatListItem = ({ item, index }) => (
    <View
      style={moodSliderStyles.iconBoxWrapper(
        index + 1 === sliderElements.length
      )}
    >
      <View style={moodSliderStyles.iconBox(item.color)}>
        <item.icon />
      </View>
      <Text style={moodSliderStyles.iconBoxSubtitle}>{item.text}</Text>
    </View>
  );

  return (
    <View style={moodSliderStyles.wrapper}>
      <Text style={moodSliderStyles.title}>How are you feeling today?</Text>
      <FlatList
        data={sliderElements}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={FlatListItem}
        style={{
          width: screenWidth,
        }}
      />
    </View>
  );
};

export default MoodSlider;

const sliderElements = [
  {
    color: "#EF5DA8",
    text: "Happy",
    icon: HappyFaceIcon,
  },
  {
    color: "#AEAFF7",
    text: "Calm",
    icon: CalmIcon,
  },
  {
    color: "#A0E3E2",
    text: "Manic",
    icon: ManicIcon,
  },
  {
    color: "#F09E54",
    text: "Angry",
    icon: AngryIcon,
  },
  {
    color: "#C3F2A6",
    text: "More",
    icon: AngryIcon,
  },
];
