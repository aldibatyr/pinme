import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import DrawerContent from "./DrawerContent";
import StackNavigator from "./StackNavigator";
import SettingsScreen from "./SettingsScreen";
import BottomNavigator from "./BottomNavigator";
import MessagesStackNavigator from "./MessagesStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerPosition={"right"}
    >
      <Drawer.Screen name="Home" component={MessagesStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
