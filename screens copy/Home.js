import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./tabScreens/Main";
import { Ionicons } from "@expo/vector-icons";
import Map from "./tabScreens/Map";

const Tab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "main") {
            iconName = "ios-chatboxes";
          } else if (route.name === "map") {
            iconName = "ios-map";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "grey"
      }}
    >
      <Tab.Screen name="main" component={Main} options={{ title: "Main" }} />
      <Tab.Screen name="map" component={Map} options={{ title: "Map" }} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
