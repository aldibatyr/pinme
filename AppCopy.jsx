import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens copy/LoginScreen";
import Home from "./screens copy/Home";
import Registration from "./screens copy/Registration";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Settings from "./screens copy/Settings";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('')
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        {isLoggedIn ? (
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ title: "Log In", headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="home"
            component={Home}
            options={({ route, navigation }) => ({
              title: {if (user) {
                
              }},
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.navigate("settings")}
                >
                  <Ionicons name="ios-settings" size={24} color="white" />
                </TouchableOpacity>
              )
            })}
          />
        )}
      </Stack.Navigator>
      {/* 
        <Stack.Screen
          name="register"
          component={Registration}
          options={{ title: "Register", headerShown: false }}
        />
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{ title: "Settings", headerShown: false }}
        />
 */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
