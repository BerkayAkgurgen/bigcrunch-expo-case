import { Text, View } from "react-native";
import { JournalIcon, LibraryIcon, QuotesIcon } from "../../assets/icons";
import { writingGridsStyles } from "./styles/WritingGrids";

const WritingGrids = () => {
  return (
    <View style={writingGridsStyles.container}>
      <View style={writingGridsStyles.gridWrapper}>
        {archivesList.map((archive) => (
          <View style={writingGridsStyles.card} key={archive.title}>
            <archive.icon />
            <Text style={writingGridsStyles.cardTitle}>{archive.title}</Text>
          </View>
        ))}
      </View>
      <View style={writingGridsStyles.quoteWrapper}>
        <Text style={writingGridsStyles.quoteText}>
          “It is better to conquer yourself than to win a thousand battles”
        </Text>
        <QuotesIcon />
      </View>
    </View>
  );
};

export default WritingGrids;

const archivesList = [
  {
    title: "Journal",
    icon: JournalIcon,
  },
  {
    title: "Library",
    icon: LibraryIcon,
  },
];
