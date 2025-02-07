import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  CameraIcon,
  CommunityIcon,
  HomeIcon,
  ThoughtIcon,
} from "../../assets/icons";
import { indexStyles } from "../../style/index.style";

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
                <View style={focused ? indexStyles.dotStyle : null} />
                <tab.icon focused={focused} />
              </>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={indexStyles.tabButtonStyle}
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
  tabBarStyle: indexStyles.tabBarStyle,
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
