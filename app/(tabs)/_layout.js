import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  CommunityIcon,
  HomeIcon,
  ThoughtIcon,
} from "../../assets/icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={screenOptions}>
      {tabElEmenets.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <View style={focused ? dotStyle : null} />
                <tab.icon focused={focused} />
              </>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={tabButtonStyle}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 85,
    padding: "11px auto",
    position: "relative",
    overflow: "hidden",
  },
};

const tabButtonStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const dotStyle = {
  width: 12,
  height: 12,
  backgroundColor: "#FE8235",
  borderRadius: "50%",
  position: "absolute",
  top: "-100%",
  marginTop: -6,
  left: "50%",
  transform: [{ translateX: "-50%" }],
};

const tabElEmenets = [
  {
    name: "index",
    icon: HomeIcon,
  },
  {
    name: "sessions",
    icon: CameraIcon,
  },
  {
    name: "thought",
    icon: ThoughtIcon,
  },
  {
    name: "community",
    icon: CommunityIcon,
  },
];
