import { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Card } from "../";
import { ClockIcon, DateIcon, FaSortIcon } from "../../assets/icons";
import ArrowDownIcon from "../../assets/icons/arrow_down_icon";
import { AvatarFourth, AvatarSecond, AvatarThird } from "../../assets/images";
import AvatarCircle from "../Avatar";
import { sessionsListStyles } from "./style/sessionsList.style";

const SessionsList = () => {
  const [sortOrder, setSortOrder] = useState("oldToNew");
  const [sortedSessions, setSortedSessions] = useState([...sessionsList]);

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "newToOld" ? "oldToNew" : "newToOld";
    setSortOrder(newOrder);

    const sorted = [...sortedSessions].sort((a, b) => {
      return newOrder === "newToOld"
        ? b.dateObject - a.dateObject
        : a.dateObject - b.dateObject;
    });

    setSortedSessions(sorted);
  };

  const renderSessionItem = ({ item }) => (
    <Card
      style={[
        sessionsListStyles.sessionCard,
        item.active ? null : sessionsListStyles.sessionCardDeactiveBorder,
      ]}
      color={item.active ? "#FEF3E7" : "#F8F6F5"}
      icon={false}
    >
      <View style={sessionsListStyles.sessionInfo}>
        <AvatarCircle AvatarImage={item.image} />
        <View style={sessionsListStyles.sessionTextWrapper}>
          <Text style={sessionsListStyles.sessionName}>{item.name}</Text>
          <Text style={sessionsListStyles.sessionDesc}>{item.desc}</Text>
        </View>
      </View>
      <View style={sessionsListStyles.sessionDetails}>
        <View style={sessionsListStyles.detailRow}>
          <DateIcon width={17} height={17} color={"#D6CCC6"} />
          <Text style={sessionsListStyles.detailText}>{item.date}</Text>
        </View>
        <View style={sessionsListStyles.detailRow}>
          <ClockIcon />
          <Text style={sessionsListStyles.detailText}>{item.timeRange}</Text>
        </View>
      </View>
      <View style={sessionsListStyles.sessionActions}>
        <View style={sessionsListStyles.actionButton}>
          <Text style={sessionsListStyles.actionButtonText}>
            {item.buttonText}
          </Text>
        </View>
        <Text style={sessionsListStyles.secondButtonText}>
          {item.secondButtonText}
        </Text>
      </View>
    </Card>
  );

  return (
    <View style={sessionsListStyles.container}>
      <FlatList
        data={sortedSessions}
        renderItem={renderSessionItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={sessionsListStyles.listContainer}
        scrollEnabled={false}
        ListHeaderComponent={
          <View style={sessionsListStyles.header}>
            <View style={sessionsListStyles.titleWrapper}>
              <Text style={sessionsListStyles.title}>All Sessions</Text>
              <ArrowDownIcon />
            </View>
            <TouchableOpacity onPress={toggleSortOrder}>
              <FaSortIcon />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default SessionsList;

const sessionsList = [
  {
    name: "Sahana V",
    desc: "Msc in Clinical Psychology",
    timeRange: "7:30 PM - 8:30 PM",
    date: "31st March '22",
    dateObject: new Date(2022, 2, 31),
    buttonText: "Reschedule",
    secondButtonText: "Join Now",
    image: AvatarSecond,
    active: true,
  },
  {
    name: "Sahana V",
    desc: "Msc in Clinical Psychology",
    timeRange: "7:30 PM - 8:30 PM",
    date: "10th March '22",
    dateObject: new Date(2022, 2, 10),

    buttonText: "Re-book",
    secondButtonText: "View Profile",
    image: AvatarThird,
    active: false,
  },
  {
    name: "Sahana V",
    desc: "Msc in Clinical Psychology",
    timeRange: "7:30 PM - 8:30 PM",
    date: "15th March '22",
    dateObject: new Date(2022, 2, 15),
    buttonText: "Re-book",
    secondButtonText: "View Profile",
    image: AvatarFourth,
    active: false,
  },
];
