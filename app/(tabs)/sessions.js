import { ScrollView } from "react-native";
import { Header } from "../../components";
import SessionsList from "../../components/sessions/SessionsList";
import UpcomingCard from "../../components/sessions/UpcomingCard";
import { indexStyles } from "./style/index.style";

const Sessions = () => {
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
        <UpcomingCard />
        <SessionsList />
      </ScrollView>
    </ScrollView>
  );
};

export default Sessions;
