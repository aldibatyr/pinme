import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MapPage from "./MapPage";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "react-native-paper";
import MessagesStackNavigator from "./MessagesStackNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Conversations"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          console.log(route)
          if (route.name === "Conversations") {
            iconName = "ios-chatboxes";
          } else if (route.name === "map") {
            iconName = "ios-map";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Conversations" component={MessagesStackNavigator} />
      {/* <Tab.Screen name="Map" component={MapPage} /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
