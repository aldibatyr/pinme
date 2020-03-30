import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import BottomNavigator from "./BottomNavigator";
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // headerMode="screen"
      // screenOptions={{
      //   header: ({ scene, previous, navigation }) => (
      //     <Header scene={scene} previous={previous} navigation={navigation} />
      //   )
      // }}
    >
      <Stack.Screen
        name="Main"
        component={BottomNavigator}
        options={{ headerTitle: "Conversations" }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
